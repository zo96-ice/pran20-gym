
let workoutIndex = 1;
let phase = "warmup";
let itemIndex = 0;
let round = 1;
let restSeconds = 45;
let restInterval = null;
let gymSettings = {};

const defaults = {
  date: "",
  time: "",
  bodyWeight: "185.2 LBS",
  recoveryScore: "8.1 / 10",
  sleep: "7.2 HRS",
  hrv: "68 MS",
  hydration: "GOOD",
  streak: "12",
  lastWorkout: "STRENGTH A",
  lastDetail: "PUSH / LEGS",
  lastDate: "MAY 26, 2025",
  kneeHold: false
};

const detailMap = {
  "STRENGTH A": "PUSH / LEGS",
  "STRENGTH B": "ATHLETIC DAY",
  "STRENGTH C": "POWER / DURABILITY"
};

const nextIndexMap = {
  "STRENGTH A": 1,
  "STRENGTH B": 2,
  "STRENGTH C": 0
};

function el(id){ return document.getElementById(id); }

function videoBaseName(fileName){
  if(!fileName) return "";
  return String(fileName).replace(/\.(mov|mp4|m4v|webm)$/i, "");
}

function videoSources(fileName){
  const base = videoBaseName(fileName);
  if(!base) return [];
  return ["videos/" + base + ".mov", "videos/" + base + ".mp4"];
}


function videoToMov(fileName){
  if(!fileName) return "";
  return String(fileName).replace(/\.(mp4|m4v|webm)$/i, ".mov");
}


function isKneeHoldActive(){
  return gymSettings.kneeHold === true || gymSettings.kneeHold === "true" || gymSettings.kneeHold === "on";
}

function activeWorkouts(){
  return isKneeHoldActive() && GYM_DATA.kneeHoldWorkouts ? GYM_DATA.kneeHoldWorkouts : GYM_DATA.workouts;
}

function modeDetailFor(key){
  if(isKneeHoldActive()) return "KNEE HOLD / UPPER BODY";
  return detailMap[key] || "";
}


function fitStage(){
  const scale = Math.min(window.innerWidth / 1536, window.innerHeight / 1024);
  document.documentElement.style.setProperty("--scale", scale);
}
window.addEventListener("resize", fitStage);
fitStage();

function screen(id){
  document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
  el(id).classList.add("active");
}

function formatGymDate(value){
  if(!value) return "";
  const raw = String(value).trim();
  const m = raw.match(/^(\d{1,2})[\/\-](\d{1,2})[\/\-](\d{2,4})$/);
  if(m){
    const months = ["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"];
    const mo = parseInt(m[1],10), day = parseInt(m[2],10);
    let yr = m[3];
    if(yr.length === 2) yr = "20" + yr;
    if(mo >= 1 && mo <= 12) return `${months[mo-1]} ${day}, ${yr}`;
  }
  const parsed = new Date(raw);
  if(!Number.isNaN(parsed.getTime())){
    return parsed.toLocaleDateString(undefined,{month:"short",day:"numeric",year:"numeric"}).toUpperCase();
  }
  return raw.toUpperCase();
}

function formatGymDateFromDate(d){
  return d.toLocaleDateString(undefined,{month:"short",day:"numeric",year:"numeric"}).toUpperCase();
}

function loadSettings(){
  try{
    gymSettings = {...defaults, ...JSON.parse(localStorage.getItem("jeffeypGymSettingsV74") || "{}")};
  }catch(e){
    gymSettings = {...defaults};
  }
  normalizeSettings();
}

function normalizeSettings(){
  gymSettings.kneeHold = gymSettings.kneeHold === true || gymSettings.kneeHold === "true" || gymSettings.kneeHold === "on";
  const lw = String(gymSettings.lastWorkout || defaults.lastWorkout).toUpperCase();
  if(detailMap[lw]){
    gymSettings.lastWorkout = lw;
    gymSettings.lastDetail = modeDetailFor(lw) || detailMap[lw];
  }
  gymSettings.lastDate = formatGymDate(gymSettings.lastDate || defaults.lastDate);
}

function saveSettings(){
  gymSettings = {
    date: el("setDate").value.trim(),
    time: el("setTime").value.trim(),
    bodyWeight: el("setBodyWeight").value.trim() || defaults.bodyWeight,
    recoveryScore: el("setRecoveryScore").value.trim() || defaults.recoveryScore,
    sleep: el("setSleep").value.trim() || defaults.sleep,
    hrv: el("setHrv").value.trim() || defaults.hrv,
    hydration: el("setHydration").value.trim() || defaults.hydration,
    streak: el("setStreak").value.trim() || defaults.streak,
    lastWorkout: el("setLastWorkout").value.trim() || defaults.lastWorkout,
    lastDetail: detailMap[el("setLastWorkout").value] || defaults.lastDetail,
    lastDate: formatGymDate(el("setLastDate").value.trim() || defaults.lastDate),
    kneeHold: !!(el("setKneeHold") && el("setKneeHold").checked)
  };
  gymSettings.lastDetail = gymSettings.kneeHold ? "KNEE HOLD / UPPER BODY" : (detailMap[gymSettings.lastWorkout] || defaults.lastDetail);
  normalizeSettings();
  localStorage.setItem("jeffeypGymSettingsV74", JSON.stringify(gymSettings));
  updateHome();
  goHome();
}

function resetSettings(){
  localStorage.removeItem("jeffeypGymSettingsV74");
  loadSettings();
  openSettings();
  updateHome();
}

function syncLastWorkoutDetail(){
  const kneeOn = !!(el("setKneeHold") && el("setKneeHold").checked);
  el("setLastDetail").value = kneeOn ? "KNEE HOLD / UPPER BODY" : (detailMap[el("setLastWorkout").value] || "");
}

function openSettings(){
  loadSettings();
  el("setDate").value = gymSettings.date || "";
  el("setTime").value = gymSettings.time || "";
  el("setBodyWeight").value = gymSettings.bodyWeight || "";
  el("setRecoveryScore").value = gymSettings.recoveryScore || "";
  el("setSleep").value = gymSettings.sleep || "";
  el("setHrv").value = gymSettings.hrv || "";
  el("setHydration").value = gymSettings.hydration || "";
  el("setStreak").value = gymSettings.streak || "";
  el("setLastWorkout").value = detailMap[gymSettings.lastWorkout] ? gymSettings.lastWorkout : defaults.lastWorkout;
  syncLastWorkoutDetail();
  el("setLastDate").value = gymSettings.lastDate || "";
  screen("settings");
}

function nextWorkoutIndex(){
  const last = String(gymSettings.lastWorkout || defaults.lastWorkout).toUpperCase();
  return nextIndexMap[last] ?? 1;
}

function selectedWorkout(){
  const workouts = activeWorkouts();
  return workouts[workoutIndex] || workouts[0];
}

function currentArray(){
  const w = selectedWorkout();
  if(phase === "warmup") return w.warmup;
  if(phase === "exercise") return w.exercises;
  if(phase === "finisher") return w.finisher || [];
  return w.cooldown;
}

function currentItem(){
  return currentArray()[itemIndex];
}

function updateHome(){
  const now = new Date();
  const dateText = gymSettings.date ? formatGymDate(gymSettings.date) : formatGymDateFromDate(now);
  const timeText = gymSettings.time || now.toLocaleTimeString(undefined,{hour:"numeric",minute:"2-digit"}).toUpperCase();
  const days = Math.ceil((new Date(GYM_DATA.tournament.startDate + "T00:00:00") - now) / 86400000);

  el("homeCountdown").textContent = days > 0 ? String(days) : "GO";
  el("homeStreak").textContent = String(gymSettings.streak || defaults.streak);
  el("homeLastWorkout").textContent = String(gymSettings.lastWorkout || defaults.lastWorkout).toUpperCase();
  el("homeLastDetail").textContent = String(gymSettings.lastDetail || defaults.lastDetail).toUpperCase();
  el("homeLastDate").textContent = formatGymDate(gymSettings.lastDate || defaults.lastDate);

  el("homeDate").textContent = dateText;
  el("homeTime").textContent = timeText;
  el("homeBodyWeight").textContent = String(gymSettings.bodyWeight || defaults.bodyWeight).toUpperCase();

  // These are hidden on the home bottom bar in v7.4, but still feed Settings/Progress.
  el("homeRecovery").textContent = String(gymSettings.recoveryScore || defaults.recoveryScore).toUpperCase();
  el("homeSleep").textContent = String(gymSettings.sleep || defaults.sleep).toUpperCase();
  el("homeHrv").textContent = String(gymSettings.hrv || defaults.hrv).toUpperCase();
  el("homeHydration").textContent = String(gymSettings.hydration || defaults.hydration).toUpperCase();

  workoutIndex = nextWorkoutIndex();
  const w = selectedWorkout();
  const home = el("home");
  if(home) home.classList.toggle("kneeHoldActive", isKneeHoldActive());
  el("homeWorkoutTitle").textContent = w.title.toUpperCase();
  el("homeWorkoutFocus").textContent = w.focus.toUpperCase();
  el("homeFocusLine").textContent = w.focusLine.toUpperCase();

  updateTeeEverywhere();
  if(el("progress").classList.contains("active")) renderProgress();
}

function startSelectedWorkout(){
  workoutIndex = nextWorkoutIndex();
  phase = "warmup";
  itemIndex = 0;
  round = 1;
  renderWorkout();
  screen("workout");
}


function exerciseWeightKey(item){
  const name = item && item.name ? item.name : "unknown";
  return "jeffeypExerciseWeightV85_" + name.toUpperCase().replace(/[^A-Z0-9]+/g, "_");
}

function legacyExerciseWeightKey(item){
  const name = item && item.name ? item.name : "unknown";
  return "jeffeypExerciseWeightV78_" + name.toUpperCase().replace(/[^A-Z0-9]+/g, "_");
}

function getLastExerciseWeight(item){
  return localStorage.getItem(exerciseWeightKey(item)) || localStorage.getItem(legacyExerciseWeightKey(item)) || "";
}

function formatWeightValue(value){
  const v = String(value || "").trim().toUpperCase();
  if(!v) return "";
  if(v.includes("LB")) return v;
  if(v === "BW" || v === "BODYWEIGHT") return "BODYWEIGHT";
  return v + " LBS";
}

function stripWeightForInput(value){
  const v = String(value || "").toUpperCase().trim();
  if(!v) return "";
  if(v === "BODYWEIGHT" || v === "BW") return "BODYWEIGHT";
  return v.replace(/\s*LBS?\.?$/i, "").trim();
}

function parseWeightNumber(value){
  const m = String(value || "").match(/-?\d+(\.\d+)?/);
  return m ? Number(m[0]) : null;
}

function saveCurrentExerciseWeight(){
  if(phase !== "exercise") return;
  const input = el("todayWeightInput");
  const item = currentItem();
  if(!input || !item || input.disabled) return;
  const raw = input.value.trim();
  if(!raw) return;
  const formatted = formatWeightValue(raw);
  localStorage.setItem(exerciseWeightKey(item), formatted);
  const last = el("lastUsedWeight");
  if(last) last.textContent = formatted;
}

function updateExerciseWeightFields(item){
  const last = el("lastUsedWeight");
  const input = el("todayWeightInput");
  if(!last || !input || !item) return;

  if(phase !== "exercise"){
    last.textContent = (item.weight || "BODYWEIGHT").toUpperCase();
    input.value = "";
    input.placeholder = "N/A";
    input.disabled = true;
    return;
  }

  const lastWeight = getLastExerciseWeight(item);
  last.textContent = lastWeight || "--";
  input.value = stripWeightForInput(lastWeight);
  input.placeholder = lastWeight ? "ADJUST" : "LBS";
  input.disabled = false;
}

function adjustTodayWeight(delta){
  if(phase !== "exercise") return;
  const input = el("todayWeightInput");
  if(!input || input.disabled) return;
  let n = parseWeightNumber(input.value);
  if(n === null) n = parseWeightNumber(getLastExerciseWeight(currentItem())) || 0;
  n = Math.max(0, n + delta);
  input.value = String(n);
  saveCurrentExerciseWeight();
}

function getAllWeightedExercises(){
  const rows = [];
  const seen = new Set();
  (activeWorkouts() || []).forEach(w => {
    (w.exercises || []).forEach(ex => {
      const key = exerciseWeightKey(ex);
      if(!seen.has(key)){
        seen.add(key);
        rows.push({ workout: w.title, exercise: ex, key });
      }
    });
  });
  return rows;
}

function openWeights(){
  renderWeightsScreen();
  screen("weights");
}

function renderWeightsScreen(){
  const list = el("weightsList");
  if(!list) return;
  const rows = getAllWeightedExercises();
  list.innerHTML = rows.map((row, idx) => {
    const val = getLastExerciseWeight(row.exercise);
    return `<div class="weightRow">
      <div class="workoutTag">${row.workout.toUpperCase()}</div>
      <div class="exerciseName">${row.exercise.name.toUpperCase()}</div>
      <input class="weightEditInput" data-weight-index="${idx}" value="${val}" placeholder="--">
    </div>`;
  }).join("");
}

function saveWeightsScreen(){
  const rows = getAllWeightedExercises();
  document.querySelectorAll(".weightEditInput").forEach(input => {
    const idx = Number(input.dataset.weightIndex);
    const row = rows[idx];
    if(!row) return;
    const raw = input.value.trim();
    if(raw){
      localStorage.setItem(row.key, formatWeightValue(raw));
    }else{
      localStorage.removeItem(row.key);
    }
  });
  renderWeightsScreen();
}

function clearWeightsScreen(){
  if(!confirm("Clear all saved exercise weights?")) return;
  getAllWeightedExercises().forEach(row => localStorage.removeItem(row.key));
  renderWeightsScreen();
}

function renderWorkout(){
  const w = selectedWorkout();
  const arr = currentArray();
  const item = currentItem();
  const next = getNextItem();
  const phaseName = phase === "warmup" ? "WARM-UP" : phase === "exercise" ? "STRENGTH WORK" : phase === "finisher" ? "FINISHER" : "COOLDOWN";

  el("phaseLabel").textContent = phaseName;
  el("phaseTitle").textContent = `${w.day.toUpperCase()} · ${w.title.toUpperCase()}`;
  el("roundPill").textContent = phase === "exercise" ? `ROUND ${round} / ${GYM_DATA.settings.rounds}` : phaseName;
  el("itemPill").textContent = `ITEM ${itemIndex + 1} / ${arr.length}`;

  el("currentLabel").textContent = phase === "exercise" ? "CURRENT EXERCISE" : phase === "finisher" ? "CURRENT FINISHER" : "CURRENT MOVEMENT";
  el("itemName").textContent = item.name.toUpperCase();
  el("itemTarget").textContent = (item.reps || item.target || item.time).toUpperCase();
  updateExerciseWeightFields(item);
  el("itemCue").textContent = (item.cue || "MOVE SMOOTH AND CONTROLLED.").toUpperCase();
  el("nextName").textContent = next ? next.name.toUpperCase() : "COMPLETE";
  el("mainAction").textContent = phase === "exercise" ? "REST" : "DONE";

  const v = el("exerciseVideo");
  const ph = el("videoPlaceholder");
  if(item.video){
    const sources = videoSources(item.video);
    let videoTry = 0;

    function loadVideoTry(){
      const src = sources[videoTry];
      if(!src){
        v.style.display = "none";
        ph.style.display = "grid";
        el("videoFileName").textContent = "VIDEO PLACEHOLDER";
        return;
      }

      const displayName = src.replace(/^videos\//i, "VIDEOS/");
      el("videoFileName").textContent = displayName.toUpperCase();

      v.onerror = () => {
        videoTry++;
        loadVideoTry();
      };

      v.onloadeddata = () => {
        v.style.display = "block";
        ph.style.display = "none";
        v.play();
      };

      v.src = src;
      v.load();
    }

    loadVideoTry();
  }else{
    v.style.display = "none";
    ph.style.display = "grid";
    el("videoFileName").textContent = "VIDEO PLACEHOLDER";
  }
}

function getNextItem(){
  const arr = currentArray();
  const w = selectedWorkout();
  if(itemIndex + 1 < arr.length) return arr[itemIndex + 1];
  if(phase === "warmup") return w.exercises[0];
  if(phase === "exercise"){
    if(round < GYM_DATA.settings.rounds) return w.exercises[0];
    if(w.finisher && w.finisher.length) return w.finisher[0];
    return w.cooldown[0];
  }
  if(phase === "finisher") return w.cooldown[0];
  return null;
}

function mainAction(){
  if(phase === "exercise") showRest();
  else nextItem();
}

function nextItem(){
  saveCurrentExerciseWeight();
  clearRest();
  const arr = currentArray();
  if(itemIndex + 1 < arr.length){
    itemIndex++;
  }else if(phase === "warmup"){
    phase = "exercise";
    itemIndex = 0;
    round = 1;
  }else if(phase === "exercise"){
    if(round < GYM_DATA.settings.rounds){
      round++;
      itemIndex = 0;
    }else if(selectedWorkout().finisher && selectedWorkout().finisher.length){
      phase = "finisher";
      itemIndex = 0;
    }else{
      phase = "cooldown";
      itemIndex = 0;
    }
  }else if(phase === "finisher"){
    phase = "cooldown";
    itemIndex = 0;
  }else{
    complete();
    return;
  }
  renderWorkout();
  screen("workout");
}

function prevItem(){
  clearRest();
  if(itemIndex > 0) itemIndex--;
  renderWorkout();
  screen("workout");
}

function showRest(){
  saveCurrentExerciseWeight();
  restSeconds = GYM_DATA.settings.defaultRest;
  el("restTimer").textContent = restSeconds;
  const next = getNextItem();
  el("restNextName").textContent = next ? next.name.toUpperCase() : "COOLDOWN";
  el("restNextCue").textContent = next ? (next.cue || next.target || next.time || "").toUpperCase() : "START COOLDOWN.";
  screen("rest");
  clearRest();
  restInterval = setInterval(() => {
    restSeconds--;
    el("restTimer").textContent = restSeconds;
    if(restSeconds <= 0){
      clearRest();
      nextItem();
    }
  }, 1000);
}

function clearRest(){
  if(restInterval) clearInterval(restInterval);
  restInterval = null;
}

function adjustRest(amount){
  restSeconds = Math.max(0, restSeconds + amount);
  el("restTimer").textContent = restSeconds;
}

function skipRest(){
  clearRest();
  nextItem();
}

function complete(){
  saveCurrentExerciseWeight();
  const w = selectedWorkout();
  gymSettings.lastWorkout = (w.key || w.title).toUpperCase();
  gymSettings.lastDetail = isKneeHoldActive() ? "KNEE HOLD / UPPER BODY" : (detailMap[gymSettings.lastWorkout] || w.focus.toUpperCase());
  gymSettings.lastDate = formatGymDateFromDate(new Date());
  localStorage.setItem("jeffeypGymSettingsV74", JSON.stringify(gymSettings));
  updateHome();
  el("completeTitle").textContent = "SESSION COMPLETE";
  el("completeText").textContent = `${w.day.toUpperCase()} · ${w.title.toUpperCase()} COMPLETE. LAST WORKOUT HAS BEEN UPDATED.`;
  screen("complete");
}


function lineBreak(){
  return String.fromCharCode(10);
}

function carriageReturn(){
  return String.fromCharCode(13);
}

function defaultTeeText(){
  return ["BE","STRONGER","THAN YOUR","EXCUSES"].join(lineBreak());
}

function defaultHomeShirtText(){
  return ["EVERY REP","HAS A","PURPOSE"].join(lineBreak());
}

function removeCarriageReturns(value){
  return String(value).split(carriageReturn()).join("");
}

function normalizeTeeText(txt){
  const hasText = txt && String(txt).trim();
  const raw = hasText ? removeCarriageReturns(txt) : defaultTeeText();
  return raw.toUpperCase();
}

function fitHomeShirtText(){
  const box = el("homeShirtText");
  if(!box) return;
  const txt = box.textContent || "";
  const lines = txt.split(lineBreak()).filter(Boolean).length || 1;
  let size = 22;
  if(lines >= 4) size = 18;
  if(lines >= 5) size = 15;
  if(txt.length > 42) size = Math.min(size, 15);
  if(txt.length > 60) size = Math.min(size, 12);
  box.style.fontSize = size + "px";
}

function updateTeeEverywhere(){}


function openTeeShirt(){
  screen("tee");
}

function saveTeeText(){
  // Tee shirt is now a fixed uploaded graphic, no text input needed.
}

function resetTeeText(){
  // Tee shirt is now a fixed uploaded graphic, no text input needed.
}

function showList(key){
  if(key === "shirtOptions"){
    openTeeShirt();
    return;
  }
  const titles = {
    conditioning: "CONDITIONING",
    recovery: "RECOVERY",
    tournamentMode: "TOURNAMENT MODE"
  };
  el("listLabel").textContent = "JEFFEYP'S GYM OS";
  el("listTitle").textContent = titles[key] || key.toUpperCase();
  let html = "";
  const listData = (isKneeHoldActive() && GYM_DATA.kneeHoldLists && GYM_DATA.kneeHoldLists[key]) ? GYM_DATA.kneeHoldLists[key] : GYM_DATA[key];
  listData.forEach(x => {
    html += `<div class="listrow"><b>${x.name}</b><span>${x.target}</span></div>`;
  });
  el("listItems").innerHTML = html;
  screen("list");
}

function renderProgress(){
  el("pgStreak").textContent = `${gymSettings.streak || defaults.streak} DAYS`;
  el("pgLastWorkout").textContent = `${gymSettings.lastWorkout || defaults.lastWorkout} • ${gymSettings.lastDetail || defaults.lastDetail}`;
  el("pgWeight").textContent = gymSettings.bodyWeight || defaults.bodyWeight;
  el("pgRecovery").textContent = gymSettings.recoveryScore || defaults.recoveryScore;
  el("pgSleep").textContent = gymSettings.sleep || defaults.sleep;
  el("pgHrv").textContent = gymSettings.hrv || defaults.hrv;
  if(el("pgKneeHold")) el("pgKneeHold").textContent = isKneeHoldActive() ? "ACTIVE" : "OFF";
}

function showProgress(){
  renderProgress();
  screen("progress");
}

function goHome(){
  clearRest();
  updateHome();
  screen("home");
}

/* Document-level capture router: fixes non-clickable home areas. */
function homeClickRouter(evt){
  const home = el("home");
  const stage = el("stage");
  if(!home || !stage || !home.classList.contains("active")) return;

  const rect = stage.getBoundingClientRect();
  const x = (evt.clientX - rect.left) * (1536 / rect.width);
  const y = (evt.clientY - rect.top) * (1024 / rect.height);

  let fn = null;
  if(x>=309 && x<=1061 && y>=679 && y<=758) fn = startSelectedWorkout;
  else if(x>=12 && x<=275 && y>=358 && y<=430) fn = startSelectedWorkout;
  else if(x>=12 && x<=275 && y>=432 && y<=504) fn = () => showList("conditioning");
  else if(x>=12 && x<=275 && y>=506 && y<=578) fn = () => showList("recovery");
  else if(x>=12 && x<=275 && y>=580 && y<=662) fn = () => showList("tournamentMode");
  else if(x>=12 && x<=275 && y>=663 && y<=727) fn = showProgress;
  else if(x>=12 && x<=275 && y>=727 && y<=777) fn = openSettings;
  else if(x>=12 && x<=352 && y>=788 && y<=910) fn = startSelectedWorkout;
  else if(x>=366 && x<=740 && y>=788 && y<=910) fn = () => showList("conditioning");
  else if(x>=751 && x<=1108 && y>=788 && y<=910) fn = () => showList("recovery");
  else if(x>=1120 && x<=1524 && y>=788 && y<=910) fn = () => showList("tournamentMode");

  if(fn){
    evt.preventDefault();
    evt.stopPropagation();
    fn();
  }
}

document.addEventListener("keydown", e => {
  if(e.code === "Space"){
    e.preventDefault();
    if(el("rest").classList.contains("active")) skipRest();
    else if(el("workout").classList.contains("active")) mainAction();
  }
  if(e.code === "ArrowRight" && el("workout").classList.contains("active")) nextItem();
  if(e.code === "ArrowLeft" && el("workout").classList.contains("active")) prevItem();
  if(e.key.toLowerCase() === "h") goHome();
  if(e.key.toLowerCase() === "s") openSettings();
  if(e.key.toLowerCase() === "p") showProgress();
});

document.addEventListener("click", homeClickRouter, true);
document.addEventListener("input", e => {
  if(e.target && e.target.id === "teeTextInput") saveTeeText();
});

loadSettings();
updateHome();
setInterval(updateHome, 1000);


// v75TeeDelegatedInput
document.addEventListener("input", function(e){
  if(e.target && e.target.id === "teeTextInput") saveTeeText();
}, true);

document.addEventListener("keyup", function(e){
  if(e.target && e.target.id === "teeTextInput") saveTeeText();
}, true);

window.addEventListener("load", function(){
  updateTeeEverywhere();
});


// v78WeightInputEnter
document.addEventListener("keydown", function(e){
  if(e.target && e.target.id === "todayWeightInput" && e.key === "Enter"){
    e.preventDefault();
    saveCurrentExerciseWeight();
    e.target.blur();
  }
}, true);


// v85WeightManagerEnter
document.addEventListener("keydown", function(e){
  if(e.target && e.target.classList && e.target.classList.contains("weightEditInput") && e.key === "Enter"){
    e.preventDefault();
    saveWeightsScreen();
    e.target.blur();
  }
}, true);
