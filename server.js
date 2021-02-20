const express = require("express");
const mongoose = require("mongoose");


const PORT = process.env.PORT || 3000;

const app = express();
let db = require("./models");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { useNewUrlParser: true, useUnifiedTopology: true  });

// Routes
// app.get("/exercise", function (req, res) {
  
// })

// app.get("/api/exercise", function (req, res) {
// db.Workout.find({})
// .then(dbWorkout => {
// console.log(dbWorkout);
// res.json(dbWorkout);
//   })
// });

// /api/workouts
// /api/workouts/range



app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
