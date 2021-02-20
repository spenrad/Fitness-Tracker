var db = require("../models");

module.exports = function (app) {


app.get("/api/workouts", function (req, res) {
    db.Workout.find({}).then((dbWorkout) => {
      console.log(dbWorkout);
      res.json(dbWorkout);
    });
  });

  // /api/workouts
  // /api/workouts/range
};
