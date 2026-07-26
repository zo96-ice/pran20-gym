const GYM_DATA = {
  "tournament": {
    "name": "Lake Placid Summit Classic",
    "dates": "07/27/2026 - 08/02/2026",
    "location": "Lake Placid, NY",
    "startDate": "2026-07-27"
  },
  "settings": {
    "defaultRest": 45,
    "rounds": 3
  },
  "workouts": [
    {
      "key": "STRENGTH A",
      "day": "Monday",
      "title": "Strength A",
      "focus": "Push / Legs",
      "focusLine": "PUSH \u2022 LEGS",
      "warmup": [
        {
          "name": "Bodyweight Squats",
          "target": "15 reps"
        },
        {
          "name": "Arm Circles",
          "target": "20 sec each way"
        },
        {
          "name": "Hip Hinges",
          "target": "15 reps"
        },
        {
          "name": "Walking Lunges",
          "target": "10 each leg"
        },
        {
          "name": "Incline Push-Ups",
          "target": "10 reps"
        },
        {
          "name": "Shoulder Blade Squeezes",
          "target": "15 reps"
        },
        {
          "name": "Glute Bridges",
          "target": "10 reps"
        },
        {
          "name": "Plank",
          "target": "20 sec"
        }
      ],
      "exercises": [
        {
          "name": "Goblet Squat",
          "reps": "10 reps",
          "weight": "Record weight",
          "cue": "Chest tall. Sit between the hips. Drive through the floor.",
          "video": "goblet_squat.mov"
        },
        {
          "name": "Incline Dumbbell Bench Press",
          "reps": "10 reps",
          "weight": "Record weight",
          "cue": "Shoulders packed. Control down. Press smooth.",
          "video": "incline_db_bench.mov"
        },
        {
          "name": "One-Arm Dumbbell Row",
          "reps": "10 each side",
          "weight": "Record weight",
          "cue": "Pull elbow toward hip. Pause at the top.",
          "video": "one_arm_row.mov"
        },
        {
          "name": "Romanian Deadlift",
          "reps": "10 reps",
          "weight": "Record weight",
          "cue": "Soft knees. Hinge at hips. Neutral back.",
          "video": "romanian_deadlift.mov"
        },
        {
          "name": "Standing Dumbbell Shoulder Press",
          "reps": "10 reps",
          "weight": "Record weight",
          "cue": "Brace core. Press overhead without leaning back.",
          "video": "shoulder_press.mov"
        }
      ],
      "cooldown": [
        {
          "name": "Standing Hamstring Stretch",
          "time": "30 sec/leg"
        },
        {
          "name": "Hip Flexor Stretch",
          "time": "30 sec/leg"
        },
        {
          "name": "Figure-4 Glute Stretch",
          "time": "30 sec/leg"
        },
        {
          "name": "Doorway Chest Stretch",
          "time": "30 sec/side"
        },
        {
          "name": "Child's Pose",
          "time": "45 sec"
        },
        {
          "name": "Tactical Breathing",
          "time": "2 min"
        }
      ],
      "finisher": [
        {
          "name": "Plank + Side Planks",
          "reps": "2 rounds",
          "weight": "Bodyweight",
          "cue": "Brace. Breathe. No sagging hips.",
          "video": "plank.mov"
        },
        {
          "name": "Farmer Carry",
          "reps": "Driveway carry",
          "weight": "Heavy but clean",
          "cue": "Tall posture. Tight grip. Walk with purpose.",
          "video": "farmer_carry.mov"
        }
      ]
    },
    {
      "key": "STRENGTH B",
      "day": "Wednesday",
      "title": "Strength B",
      "focus": "Athletic Day",
      "focusLine": "LOWER BODY \u2022 CORE \u2022 STABILITY",
      "warmup": [
        {
          "name": "Bodyweight Squats",
          "target": "15 reps"
        },
        {
          "name": "Arm Circles",
          "target": "20 sec each way"
        },
        {
          "name": "World's Greatest Stretch",
          "target": "30 sec/side"
        },
        {
          "name": "Walking Lunges",
          "target": "10 each leg"
        },
        {
          "name": "Lateral Shuffle",
          "target": "20 yards"
        },
        {
          "name": "Carioca",
          "target": "20 yards"
        },
        {
          "name": "High Knees",
          "target": "20 yards"
        }
      ],
      "exercises": [
        {
          "name": "Bulgarian Split Squat",
          "reps": "8 each leg",
          "weight": "Record weight",
          "cue": "Tall chest. Front heel planted. Slow lower.",
          "video": "bulgarian_split_squat.mov"
        },
        {
          "name": "Flat Dumbbell Bench Press",
          "reps": "10 reps",
          "weight": "Record weight",
          "cue": "Control the dumbbells. Press evenly.",
          "video": "flat_db_bench.mov"
        },
        {
          "name": "Chest-Supported Row",
          "reps": "10 reps",
          "weight": "Record weight",
          "cue": "Keep chest on bench. Pull shoulder blades back.",
          "video": "chest_supported_row.mov"
        },
        {
          "name": "Dumbbell Step-Ups",
          "reps": "10 each leg",
          "weight": "Record weight",
          "cue": "Drive through the working leg. Stand tall at top.",
          "video": "db_step_ups.mov"
        },
        {
          "name": "Curl to Press",
          "reps": "10 reps",
          "weight": "Record weight",
          "cue": "Smooth curl. Brace. Press overhead.",
          "video": "curl_to_press.mov"
        },
        {
          "name": "Decline Push-Ups",
          "reps": "10-15 reps",
          "weight": "Bodyweight",
          "cue": "Straight line from shoulders to ankles.",
          "video": "decline_pushups.mov"
        },
        {
          "name": "Suitcase Carry",
          "reps": "3 driveway trips",
          "weight": "One dumbbell",
          "cue": "No leaning. Switch hands each trip.",
          "video": "suitcase_carry.mov"
        }
      ],
      "cooldown": [
        {
          "name": "World's Greatest Stretch",
          "time": "30 sec/side"
        },
        {
          "name": "Couch Stretch",
          "time": "45 sec/leg"
        },
        {
          "name": "Adductor Rockbacks",
          "time": "10 reps"
        },
        {
          "name": "Open Book Rotation",
          "time": "10/side"
        },
        {
          "name": "Standing Quad Stretch",
          "time": "30 sec/leg"
        },
        {
          "name": "Ankle Mobility Rocks",
          "time": "15/leg"
        },
        {
          "name": "Tactical Breathing",
          "time": "2 min"
        }
      ],
      "finisher": []
    },
    {
      "key": "STRENGTH C",
      "day": "Friday",
      "title": "Strength C",
      "focus": "Power / Durability",
      "focusLine": "POWER \u2022 DURABILITY",
      "warmup": [
        {
          "name": "Bodyweight Squats",
          "target": "15 reps"
        },
        {
          "name": "Arm Circles",
          "target": "20 sec each way"
        },
        {
          "name": "Hip Hinges",
          "target": "15 reps"
        },
        {
          "name": "Walking Lunges",
          "target": "10 each leg"
        },
        {
          "name": "Incline Push-Ups",
          "target": "10 reps"
        },
        {
          "name": "Squat Jumps",
          "target": "5 reps"
        },
        {
          "name": "Fast Mountain Climbers",
          "target": "10 reps"
        }
      ],
      "exercises": [
        {
          "name": "Dumbbell Thrusters",
          "reps": "10 reps",
          "weight": "Record weight",
          "cue": "Squat, drive, press. Athletic, not sloppy.",
          "video": "db_thrusters.mov"
        },
        {
          "name": "Renegade Rows",
          "reps": "8 each side",
          "weight": "Record weight",
          "cue": "Wide feet. Tight core. Row without twisting.",
          "video": "renegade_rows.mov"
        },
        {
          "name": "Reverse Lunges",
          "reps": "8 each leg",
          "weight": "Record weight",
          "cue": "Step back under control. Drive up strong.",
          "video": "reverse_lunges.mov"
        },
        {
          "name": "Incline Flyes",
          "reps": "12 reps",
          "weight": "Light/moderate",
          "cue": "Soft elbows. Controlled stretch. Do not overreach.",
          "video": "incline_flyes.mov"
        },
        {
          "name": "Hammer Curls",
          "reps": "12 reps",
          "weight": "Record weight",
          "cue": "Neutral grip. No swinging.",
          "video": "hammer_curls.mov"
        },
        {
          "name": "Overhead Triceps Extension",
          "reps": "12 reps",
          "weight": "Record weight",
          "cue": "Elbows in. Full control behind head.",
          "video": "oh_triceps_extension.mov"
        }
      ],
      "cooldown": [
        {
          "name": "Cross-Body Shoulder Stretch",
          "time": "30 sec/side"
        },
        {
          "name": "Overhead Triceps Stretch",
          "time": "30 sec/side"
        },
        {
          "name": "Lat Stretch on Bench",
          "time": "45 sec"
        },
        {
          "name": "Cobra Stretch",
          "time": "30 sec"
        },
        {
          "name": "Cat-Cow",
          "time": "10 reps"
        },
        {
          "name": "Thread the Needle",
          "time": "30 sec/side"
        },
        {
          "name": "Tactical Breathing",
          "time": "2 min"
        }
      ],
      "finisher": [
        {
          "name": "Heavy Farmer Carry",
          "reps": "5 driveway trips",
          "weight": "Heavy but clean",
          "cue": "Tall posture all the way.",
          "video": "heavy_farmer_carry.mov"
        }
      ]
    }
  ],
  "conditioning": [
    {
      "name": "Walk Down / Jog Back",
      "target": "Week 1: 8 rounds"
    },
    {
      "name": "Walk / Run 50% / Run 75%",
      "target": "Week 2: 8-10 rounds"
    },
    {
      "name": "Sprint / Walk Back",
      "target": "Week 3: 8-10 rounds"
    },
    {
      "name": "Tournament Taper Sprints",
      "target": "Week 4: 4-5 rounds"
    }
  ],
  "recovery": [
    {
      "name": "Daily Mobility",
      "target": "5-8 minutes"
    },
    {
      "name": "Recovery Walk",
      "target": "15-30 minutes"
    },
    {
      "name": "Tactical Breathing",
      "target": "2 minutes"
    }
  ],
  "tournamentMode": [
    {
      "name": "Game Day Mobility",
      "target": "5 minutes"
    },
    {
      "name": "Dynamic Warm-Up",
      "target": "5 minutes"
    },
    {
      "name": "Sprint Progression",
      "target": "4-6 accelerations"
    },
    {
      "name": "Stick Activation",
      "target": "5-10 minutes"
    },
    {
      "name": "Between Games",
      "target": "Walk, hydrate, stretch, refuel"
    },
    {
      "name": "Postgame Reset",
      "target": "Cool down and note how you felt"
    }
  ],
  "shirtOptions": [
    {
      "name": "Back of Tee Shirt",
      "target": "BE STRONGER THAN YOUR EXCUSES",
      "image": "assets/be_stronger_sign.png"
    }
  ],
  "kneeHoldWorkouts": [
    {
      "key": "STRENGTH A",
      "day": "Monday",
      "title": "Strength A",
      "focus": "Knee Hold / Upper Push",
      "focusLine": "KNEE HOLD ACTIVE \u2022 LOWER BODY PAUSED",
      "warmup": [
        {
          "name": "Seated Shoulder Rolls",
          "target": "30 seconds"
        },
        {
          "name": "Arm Circles",
          "target": "20 sec each way"
        },
        {
          "name": "Shoulder Blade Squeezes",
          "target": "15 reps"
        },
        {
          "name": "Seated Thoracic Rotation",
          "target": "8 each side"
        },
        {
          "name": "Wrist + Elbow Warm-Up",
          "target": "30 seconds"
        },
        {
          "name": "Breathing Reset",
          "target": "5 slow breaths"
        }
      ],
      "exercises": [
        {
          "name": "Incline Dumbbell Bench Press",
          "reps": "3 x 8-12",
          "weight": "Moderate",
          "cue": "Bench-supported. No leg drive. Keep feet quiet.",
          "video": "incline_db_press.mov"
        },
        {
          "name": "Chest-Supported Dumbbell Row",
          "reps": "3 x 10 each",
          "weight": "Moderate",
          "cue": "Chest stays on bench. Pull elbows toward ribs.",
          "video": "chest_supported_row.mov"
        },
        {
          "name": "Seated Dumbbell Shoulder Press",
          "reps": "3 x 8-10",
          "weight": "Light to moderate",
          "cue": "Sit tall. Brace gently. No standing press.",
          "video": "seated_db_press.mov"
        },
        {
          "name": "Lying Dumbbell Triceps Extension",
          "reps": "3 x 10-12",
          "weight": "Light to moderate",
          "cue": "Upper arms still. Smooth tempo.",
          "video": "lying_triceps_extension.mov"
        },
        {
          "name": "Seated Dumbbell Curl",
          "reps": "3 x 10-12",
          "weight": "Moderate",
          "cue": "Stay seated. No swinging.",
          "video": "seated_db_curl.mov"
        }
      ],
      "finisher": [
        {
          "name": "Seated Upper-Body Pump",
          "reps": "2 rounds: curls 12 + light press 10",
          "weight": "Light",
          "cue": "Only if knee is calm. Stay seated.",
          "video": "upper_body_pump.mov"
        }
      ],
      "cooldown": [
        {
          "name": "Doorway Chest Stretch",
          "target": "30 sec each side"
        },
        {
          "name": "Cross-Body Shoulder Stretch",
          "target": "30 sec each side"
        },
        {
          "name": "Overhead Triceps Stretch",
          "target": "30 sec each side"
        },
        {
          "name": "Lat Stretch on Bench",
          "target": "30 seconds"
        },
        {
          "name": "Neck + Trap Reset",
          "target": "30 seconds"
        },
        {
          "name": "Tactical Breathing",
          "target": "2 minutes"
        }
      ]
    },
    {
      "key": "STRENGTH B",
      "day": "Wednesday",
      "title": "Strength B",
      "focus": "Knee Hold / Chest + Back",
      "focusLine": "KNEE HOLD ACTIVE \u2022 NO LEGS / NO CONDITIONING",
      "warmup": [
        {
          "name": "Seated Shoulder Rolls",
          "target": "30 seconds"
        },
        {
          "name": "Arm Circles",
          "target": "20 sec each way"
        },
        {
          "name": "Shoulder Blade Squeezes",
          "target": "15 reps"
        },
        {
          "name": "Seated Thoracic Rotation",
          "target": "8 each side"
        },
        {
          "name": "Wrist + Elbow Warm-Up",
          "target": "30 seconds"
        },
        {
          "name": "Breathing Reset",
          "target": "5 slow breaths"
        }
      ],
      "exercises": [
        {
          "name": "Flat Dumbbell Bench Press",
          "reps": "3 x 8-12",
          "weight": "Moderate",
          "cue": "Controlled reps. No leg drive.",
          "video": "flat_db_press.mov"
        },
        {
          "name": "Incline Dumbbell Flye",
          "reps": "3 x 10-12",
          "weight": "Light",
          "cue": "Soft elbows. Stretch only to comfort.",
          "video": "incline_flye.mov"
        },
        {
          "name": "Chest-Supported Rear Delt Raise",
          "reps": "3 x 12-15",
          "weight": "Light",
          "cue": "Small controlled raise. No body swing.",
          "video": "rear_delt_raise.mov"
        },
        {
          "name": "One-Arm Bench-Supported Row",
          "reps": "3 x 10 each",
          "weight": "Moderate",
          "cue": "Support body on bench. Keep injured knee unloaded.",
          "video": "one_arm_row.mov"
        },
        {
          "name": "Seated Hammer Curl",
          "reps": "3 x 10-12",
          "weight": "Moderate",
          "cue": "Thumbs up. Slow lower.",
          "video": "seated_hammer_curl.mov"
        }
      ],
      "finisher": [
        {
          "name": "Bench-Supported Arm Finisher",
          "reps": "2 rounds: curls 12 + triceps 12",
          "weight": "Light",
          "cue": "Upper body only. Stop if knee position bothers you.",
          "video": "arm_finisher.mov"
        }
      ],
      "cooldown": [
        {
          "name": "Doorway Chest Stretch",
          "target": "30 sec each side"
        },
        {
          "name": "Cross-Body Shoulder Stretch",
          "target": "30 sec each side"
        },
        {
          "name": "Overhead Triceps Stretch",
          "target": "30 sec each side"
        },
        {
          "name": "Lat Stretch on Bench",
          "target": "30 seconds"
        },
        {
          "name": "Neck + Trap Reset",
          "target": "30 seconds"
        },
        {
          "name": "Tactical Breathing",
          "target": "2 minutes"
        }
      ]
    },
    {
      "key": "STRENGTH C",
      "day": "Friday",
      "title": "Strength C",
      "focus": "Knee Hold / Shoulders + Arms",
      "focusLine": "KNEE HOLD ACTIVE \u2022 DOCTOR CLEARANCE REQUIRED FOR LEGS",
      "warmup": [
        {
          "name": "Seated Shoulder Rolls",
          "target": "30 seconds"
        },
        {
          "name": "Arm Circles",
          "target": "20 sec each way"
        },
        {
          "name": "Shoulder Blade Squeezes",
          "target": "15 reps"
        },
        {
          "name": "Seated Thoracic Rotation",
          "target": "8 each side"
        },
        {
          "name": "Wrist + Elbow Warm-Up",
          "target": "30 seconds"
        },
        {
          "name": "Breathing Reset",
          "target": "5 slow breaths"
        }
      ],
      "exercises": [
        {
          "name": "Seated Arnold Press",
          "reps": "3 x 8-10",
          "weight": "Light to moderate",
          "cue": "Seated only. Smooth rotation.",
          "video": "seated_arnold_press.mov"
        },
        {
          "name": "Bench-Supported Dumbbell Pullover",
          "reps": "3 x 10-12",
          "weight": "Light to moderate",
          "cue": "Ribs down. Move slow.",
          "video": "db_pullover.mov"
        },
        {
          "name": "Chest-Supported Dumbbell Row",
          "reps": "3 x 10-12",
          "weight": "Moderate",
          "cue": "No standing row. Keep lower body still.",
          "video": "chest_supported_row.mov"
        },
        {
          "name": "Seated Lateral Raise",
          "reps": "3 x 12-15",
          "weight": "Light",
          "cue": "Lead with elbows. No shrugging.",
          "video": "seated_lateral_raise.mov"
        },
        {
          "name": "Seated Overhead Triceps Extension",
          "reps": "3 x 10-12",
          "weight": "Light to moderate",
          "cue": "Stay tall. Keep knee relaxed.",
          "video": "seated_triceps_extension.mov"
        }
      ],
      "finisher": [
        {
          "name": "Seated Shoulder Burnout",
          "reps": "2 rounds: lateral raise 12 + front raise 10",
          "weight": "Very light",
          "cue": "Upper body only. Pain-free and controlled.",
          "video": "shoulder_burnout.mov"
        }
      ],
      "cooldown": [
        {
          "name": "Doorway Chest Stretch",
          "target": "30 sec each side"
        },
        {
          "name": "Cross-Body Shoulder Stretch",
          "target": "30 sec each side"
        },
        {
          "name": "Overhead Triceps Stretch",
          "target": "30 sec each side"
        },
        {
          "name": "Lat Stretch on Bench",
          "target": "30 seconds"
        },
        {
          "name": "Neck + Trap Reset",
          "target": "30 seconds"
        },
        {
          "name": "Tactical Breathing",
          "target": "2 minutes"
        }
      ]
    }
  ],
  "kneeHoldLists": {
    "conditioning": [
      {
        "name": "Conditioning Paused",
        "target": "No running, sprinting, cutting, shuffling, jumping, or driveway intervals until cleared."
      },
      {
        "name": "Upper-Body Only Option",
        "target": "Seated/bench dumbbell intervals only if knee is calm and you can set up safely."
      },
      {
        "name": "Recovery Priority",
        "target": "Protect knee, control swelling, and follow doctor/PT plan when given."
      }
    ],
    "recovery": [
      {
        "name": "Knee Hold Active",
        "target": "Lower-body mobility/rehab only after doctor/PT guidance."
      },
      {
        "name": "Upper-Body Mobility",
        "target": "Shoulders, chest, back, neck: 5-10 minutes."
      },
      {
        "name": "Swelling Management Reminder",
        "target": "Rest, elevate, protect the knee, and avoid testing it."
      }
    ],
    "tournamentMode": [
      {
        "name": "Lower Body Paused",
        "target": "No cutting, sprinting, defensive slides, dodging, or conditioning tests."
      },
      {
        "name": "Doctor / PT Clearance Required",
        "target": "Return-to-play work stays locked out until cleared."
      },
      {
        "name": "Maintain What You Can",
        "target": "Upper body, safe core/bracing, sleep, nutrition, and recovery habits."
      }
    ]
  }
};