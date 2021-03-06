var db = require("../models");

module.exports = function (app) {
  app.get("/api/workouts", function (req, res) {
    db.Workout.find({})
      .then((dbWorkout) => {
        console.log(dbWorkout);
        res.json(dbWorkout);
      })
      .catch((err) => {
        res.json(err);
      });
  });

  app.put("/api/workouts/:id", function (req, res) {
    db.Workout.findOneAndUpdate(
      { _id: req.params.id },
      { $push: { exercises: req.body } },
      { new: true }
    )
      .then((dbWorkout) => {
        console.log("dbWorkout PUT:", dbWorkout);
        res.json(dbWorkout);
      })
      .catch((err) => {
        console.log(err);
        res.status(404).json(err);
      });
  });

  app.post("/api/workouts/", function (req, res) {
    db.Workout.create(req.body)
      .then((dbWorkout) => {
        console.log("dbWorkout POST:", dbWorkout);
        res.json(dbWorkout);
      })
      .catch((err) => {
        res.json(err);
      });
  });

  app.get("/api/workouts/range", function (req, res) {
    // use aggregate instead of find, look up doxx
    db.Workout.find({})
      .limit(7)
      .then((dbWorkout) => {
        console.log(dbWorkout);
        res.json(dbWorkout);
      })
      .catch((err) => {
        res.json(err);
      });
  });
};
