// empty array to hold each of our featured films
var movies = [];

// function to display movie information
function displayMovieInfo() {
  var movie = $(this).attr("data-name");
  var queryURL = "https://www.omdbapi.com/?t=" + movie + "&apikey=7d0feada";

  // ajax call to OMDB API
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    var movieDiv = $("<div class='movie'>");
    
    var rating = response.Rated;
    var pOne = $("<p>").text("Rating: " + rating);
    movieDiv.append(pOne);

    var released = response.Released;
    var pTwo = $("<p>").text("Released: " + released);
    moviedDiv.append(pTwo);

    var plot = response.Plot;
    var pThree = $("<p>").text("Plot: " + plot);
    movieDiv.append(pThree);

    var imgURL = response.Poster;
    var image = $("<img>").attr("src", imgURL);
    movieDiv.append(image);

    $("#movies-view").append(movieDiv);
  })
}

// on click event handler
$("#add-movie-1 #add-movie-2").on("click", function(event) {
  event.preventDefault();

  var movie_1 = $("#movie-input-1").val().trim();
  var movie_2 = $("#movie-input-2").val().trim();

  movies.push(movie_1);
  movies.push(movie_2);

})