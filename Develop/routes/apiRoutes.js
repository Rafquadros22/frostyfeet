const router = require("express").Router();
const db = require("../models");

//gets last workout from api.js
router.get("/api/workouts", (req, res) => {
  db.Workout.find({})
    .then((dbWorkouts) => {
      res.json(dbWorkouts);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

//create a new workout in database
router.post("/api/workouts", async (req, res) => {
  try {
    const response = await db.Workout.create({});
    res.json(response);
  } catch (err) {
    console.log("error creating workout: ", err);
  }
});

//used api.js tp add excercise to a workout
router.put("/api/workouts/:id", ({ body, params }, res) => {
  const workoutId = params.id;
  db.Workout.findByIdAndUpdate(workoutId, { $push: { exercises: body } }).then(
    (dbWorkout) => {
      res.json(dbWorkout);
    }
  );
});

router.get("/api/workouts/range", (req, res) => {
  db.Workout.find({})
    .limit(7)
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

module.exports = router;
