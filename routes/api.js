const router = require("express").Router();
const db = require("../models");

router.get("/api/workouts", (req, res) => {
  db.Workout.find({})
    .then((workoutDb) => {
      re.json(workoutDb);
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
      res.status(400).json(err);
    });
});
router.put("/api/workouts/:id", (req, res) => {
  db.Workout.findOneAndUpdate(
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
  db.Workout.find({})
    .then((workoutDb) => {
      re.json(workoutDb);
    })
    .catch((err) => {
      res.json(err);
    });
});
module.exports = router;
