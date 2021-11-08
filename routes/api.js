const router = require("express").Router();
const Workout = require("../models/index");

router.get("/api/workouts", (req, res) => {
  Workout.find({})
    .then((workoutDb) => {
      re.json(workoutDb);
    })
    .catch((err) => {
      res.json(err);
    });
});
router.post("/api/workouts", ({ body }, res) => {
  Workout.create(body)
    .then((workoutDb) => {
      res.json(workoutDb);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});
router.put("/api/workouts/:id", ({ body }, res) => {
  Workout.findOneAndUpdate(
    { _id: req.params.id },
    {
      $push: { exercise: req.body },
    },
    { new: true }
  )
    .then((workoutDb) => {
      res.json(workoutDb);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});
router.get("/api/workouts/range", (req, res) => {
  Workout.find({})
    .then((workoutDb) => {
      re.json(workoutDb);
    })
    .catch((err) => {
      res.json(err);
    });
});
