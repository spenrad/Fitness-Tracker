Fitness-Tracker
====

# Description
This app is intended to track, log and visualise the data from your exercises within a given workout. This is implemented with a by charting the data you enter via MongoDB.

----

# What's Happened??
Working on the back-end of this app proved to be challenging. Utilizing Morgan, an npm package that creates helpful console logs in your terminal, proved useful in debugging the process. However, the routes would not behave properly, thus data entered into the forms did not write to the database. Whereas the routes seemed to be correct, they did not agree with the inherrited front-end code. Let's look at what our routes were attempting to accomplish.

----

# Back-end Routes
<b>GET ROUTES</b>
```
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
```
This route would produce a 404 error according to Morgan, so it is possible that the the correct thing was not being queried from the databse as the goal was to populate the form with the last entered workout.

```
app.get("/api/workouts/range", function (req, res) {
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
```
This route behaved nicely according to Morgan although it was not able to access the database since there was no data present. You'll notice the `.limit()` after the query. This grabs the last 7 entries into the database. This route is intended to GET the database info to be rendered on screen into the charts created in the `stats.js` file. NOTE: Perhaps adding a `.limit(1)` to the `/api/workouts` GET request could yield the desired results of that route.


<b>POST ROUTES</b>
```
app.post("api/workouts/", function (req, res) {
    db.Workout.create(req.body)
      .then((dbWorkout) => {
        console.log(dbWorkout);
        res.json(dbWorkout);
      })
      .catch((err) => {
        res.json(err);
      });
  });
```
According to Morgan this POST request executes upon selecting a "New Workout". My understanding is that it would post the workout you entered into the forms into the database but it seems it is being called at a different point in time, which is confusing to me. It could be possible that it is attempting to POST the data from the GET of the same route path onto the page, yet neither route behaved as intended.

<b>PUT ROUTES</b>
```
app.put("api/workouts/:id", function (req, res) {
    db.Workout.findOneAndUpdate(
      { _id: req.params.id },
      { $push: { exercises: req.body } },
      { new: true }
    )
      .then((dbWorkout) => {
        console.log(dbWorkout);
        res.json(dbWorkout);
      })
      .catch((err) => {
        res.json(err);
      });
  });
```
As specified in it's client-side request, this route utilized the ID of the workout in question. This route intends to grab the ID from the api route and update the exercise based on the ID queried and then updates the exercise based on what was entered into the form. Morgan informed me each time a PUT was attmepted that the ID was undefined for reasons unbeknownst to me.

# Future Improvements
Considering the app does not interface with the database properly there is a lot of room for improvement in the app. A good start would be to get the back-end routes to agree with the front-end javascript. I will note however, as the client-side js was inherited that it could also be improved itself. In what manner I am not sure, as it is convulted as it is.

# Deployment
If one was willing enough to attempt to update the app so that it functions properly, one only need to clone down the repository and run an `npm install` to install the dependencies. After that the only files that need to be examined are in the `routes` directory.

Below is a link to examine what the front-end of the application looks like.


# Project Link
[Deployed Heroku App]() <br>
[Project Repository](https://github.com/spenrad/Fitness-Tracker) <br>

----

# Author
Spencer Christy<br>
[GitHub](https://github.com/spenrad)<br>
[LinkedIn](https://www.linkedin.com/in/spencer-christy)<br>