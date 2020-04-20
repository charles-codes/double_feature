// universal on click event handler for movie 
$("#add-df").on("click", function(event) {
  event.preventDefault();

  // variables for capturing movie titles
  var movie_1 = $("#movie-input-1").val().trim();
  var movie_2 = $("#movie-input-2").val().trim();

  // variables for the API queries
  var queryURL = "http://www.omdbapi.com/?i=tt3896198&t=" + movie_1 + "&apikey=7d0feada";
  var queryURL2 = "http://www.omdbapi.com/?i=tt3896198&t=" + movie_2 + "&apikey=7d0feada";

  // ajax call for movie_1
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {

    console.log(response);

    var movieDiv = $("<div class='movie'>");
    
    var rating = response.Rated;
    var pOne = $("<p>").text("Rating: " + rating);
    movieDiv.append(pOne);

    var released = response.Released;
    var pTwo = $("<p>").text("Released: " + released);
    movieDiv.append(pTwo);

    var plot = response.Plot;
    var pThree = $("<p>").text("Plot: " + plot);
    movieDiv.append(pThree);

    var imgURL = response.Poster;
    var image = $("<img>").attr("src", imgURL);
    movieDiv.append(image);

    $("#movies-view-1").append(movieDiv);
  })

  // ajax call for movie 2
  $.ajax({
    url: queryURL2,
    method: "GET"
  }).then(function(response) {

    console.log(response);

    var movieDiv = $("<div class='movie'>");
    
    var rating = response.Rated;
    var pOne = $("<p>").text("Rating: " + rating);
    movieDiv.append(pOne);

    var released = response.Released;
    var pTwo = $("<p>").text("Released: " + released);
    movieDiv.append(pTwo);

    var plot = response.Plot;
    var pThree = $("<p>").text("Plot: " + plot);
    movieDiv.append(pThree);

    var imgURL = response.Poster;
    var image = $("<img>").attr("src", imgURL);
    movieDiv.append(image);

    $("#movies-view-2").append(movieDiv);
  })

  // double-feature title display
  var title = $("#df-title-input").val().trim();
  var titleH2 = $("<h2>");
  titleH2.text(title);
  $("#df-title-view").append(titleH2);

  // double-feature blurb display
  var blurb = $("#df-blurb-input").val().trim();
  var blurbP = $("<p>");
  blurbP.text(blurb);
  $("#df-blurb-view").append(blurbP);

  // set localStorage
  localStorage.setItem("movie 1", movie_1);
  localStorage.setItem("movie 2", movie_2);
  localStorage.setItem("df title", title);
  localStorage.setItem("df blurb", blurb);

  // clear input text fields
  $("#movie-input-1").val("");
  $("#movie-input-2").val("");
  $("#df-title-input").val("");
  $("#df-blurb-input").val("");
});

// function for get items from localStorage and displaying them in search fields
function getSearchFields() {
  var savedMovie1 = localStorage.getItem("movie 1");
  var savedMovie2 = localStorage.getItem("movie 2");
  var savedTitle = localStorage.getItem("df title");
  var savedBlurb = localStorage.getItem("df blurb");

  $("#movie-input-1").val(savedMovie1);
  $("#movie-input-2").val(savedMovie2);
  $("#df-title-input").val(savedTitle);
  $("#df-blurb-input").val(savedBlurb);
}

// on click function to call getSearchFields function
$("#favorite").on("click", function() {
  getSearchFields();
})

// empty / clear all content holding divs
$("#clearDiv").on("click", function() {
  $("#df-display").empty();
})