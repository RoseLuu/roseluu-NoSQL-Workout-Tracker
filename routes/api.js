const router = require("express").Router();
const db = require("../models");
// const workout = require("../public/workout");

router.get("/api/workouts", (req, res) => {
  db.Workout.aggregate([
    {
      $addFields: {
        totalDuration: { $sum: "$exercise.duration" },
        totalWeight: { $sum: "$exercise.weight" },
        totalSets: { $sum: "$exercise.sets" },
        totalReps: { $sum: "$exercise.reps" },
      },
    },
  ])
    .then((workoutDb) => {
      res.json(workoutDb);
    })
    .catch((err) => {
      res.json(err);
    });
});
router.post("/api/workouts", ({ body }, res) => {
  db.Workout.create(body)
    .then((workoutDb) => {
      res.json(workoutDb);
    })
    .catch((err) => {
      res.json(err);
    });
});
router.put("/api/workouts/:id", (req, res) => {
  db.Workout.findOneAndUpdate(
    { _id: req.params.id },
    {
      $push: { exercise: req.body },
    },
    { new: true, runValidators: true }
  )
    .then((workoutDb) => {
      res.json(workoutDb);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});
router.get("/api/workouts/range", (req, res) => {
  db.Workout.aggregate([
    {
      $addFields: {
        totalDuration: { $sum: "$exercise.duration" },
        totalWeight: { $sum: "$exercise.weight" },
        totalSets: { $sum: "$exercise.sets" },
        totalReps: { $sum: "$exercise.reps" },
      },
    },
  ])
    .limit(7)
    .then((workoutDb) => {
      re.json(workoutDb);
    })
    .catch((err) => {
      res.json(err);
    });
});
module.exports = router;
