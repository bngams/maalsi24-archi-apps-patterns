# Hello Mongo!

We used this repo to show the basics about mongo usage:
https://github.com/bngams/mongodb-tutorial/tree/master

We had some queries to implements. Some examples below:

```
// Select all movies longer than 2 hours
db.movieDetails.find({
  runtime: { $gt: 120 }
});

// Select all movies longer than 2 hours with a Metacritic score greater than 60
db.movieDetails.find({
  runtime: { $gt: 120 },
  metacritic: { $gt: 60 }
});

// Select all movies with exactly 13 awards wins
db.movieDetails.find({
  "awards.wins": 13
});

// Select all movies that have won more than 10 awards
db.movieDetails.find({
  "awards.wins": { $gt: 10 }
});


// Calculate the average Metacritic rating of all movies
db.movieDetails.aggregate([
  {
    $match: { metacritic: { $exists: true } }
  },
  {
    $group: {
      _id: null,
      averageMetacritic: { $avg: "$metacritic" }
    }
  }
]);

// Calculate the average Metacritic rating of movies directed by "George Lucas"
db.movieDetails.aggregate([
  {
    $match: { director: "George Lucas", metacritic: { $exists: true } }
  },
  {
    $group: {
      _id: "$director",
      averageMetacritic: { $avg: "$metacritic" }
    }
  }
]);

```


