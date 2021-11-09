const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema(
  {
    day: {
      type: Date,
      default: Date.now,
    },
    exercise: [
      {
        name: {
          type: String,
          trim: true,
          required: "Please enter exercise name",
        },
        type: {
          type: String,
          trim: true,
          required: "Please enter exercise type",
        },
        weight: {
          type: Number,
        },
        sets: {
          type: Number,
        },
        reps: {
          type: Number,
        },
        duration: {
          type: Number,
        },
        distance: {
          type: Number,
        },
      },
    ],
  }
  // {
  //   //mongoose won't include virtuals when convert to JSON so have set up toJSON
  //   toJSON: {
  //     //virtual help to compute properties on documents without storing it, that'll make the database lighter
  //     virtuals: true,
  //   },
  // }
);

// WorkoutSchema.virtual("totalDuration").get(function () {
//   let totalDuration = 0;
//   //loop though each exercise for duration
//   this.exercise.forEach((e) => {
//     totalDuration += e.duration;
//   });
//   return totalDuration;
// });

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
