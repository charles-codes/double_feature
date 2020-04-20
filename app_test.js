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

    var movieDiv = $("<div class='movie'>");
    
    var imgURL = response.Poster;
    var image = $("<img>").attr("src", imgURL);
    movieDiv.append(image);

    var rating = response.Rated;
    var pOne = $("<p>").text("Rating: " + rating);
    movieDiv.append(pOne);

    var released = response.Released;
    var pTwo = $("<p>").text("Released: " + released);
    movieDiv.append(pTwo);

    var plot = response.Plot;
    var pThree = $("<p>").text("Plot: " + plot);
    movieDiv.append(pThree);

    $("#movies-view-1").append(movieDiv);
  })

  // ajax call for movie 2
  $.ajax({
    url: queryURL2,
    method: "GET"
  }).then(function(response) {

    var movieDiv = $("<div class='movie'>");
    
    var imgURL = response.Poster;
    var image = $("<img>").attr("src", imgURL);
    movieDiv.append(image);

    var rating = response.Rated;
    var pOne = $("<p>").text("Rating: " + rating);
    movieDiv.append(pOne);

    var released = response.Released;
    var pTwo = $("<p>").text("Released: " + released);
    movieDiv.append(pTwo);

    var plot = response.Plot;
    var pThree = $("<p>").text("Plot: " + plot);
    movieDiv.append(pThree);

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

  // empty array to hold string values of the four search fields
  var doubleFeature = {
    feature_1: movie_1,
    feature_2: movie_2,
    DFTitle: title,
    DFBlurb: blurb
  }

  var dfArray = [];

  dfArray.push(doubleFeature);

  console.log("Double-Feature: " + doubleFeature);

  localStorage.setItem("df", JSON.stringify(dfArray[0]));

  // set localStorage
  // localStorage.setItem("movie 1", movie_1);
  // localStorage.setItem("movie 2", movie_2);
  // localStorage.setItem("df title", title);
  // localStorage.setItem("df blurb", blurb);

  // clear input text fields
  $("#movie-input-1").val("");
  $("#movie-input-2").val("");
  $("#df-title-input").val("");
  $("#df-blurb-input").val("");
});

// function for get items from localStorage and displaying them in search fields
function getSearchFields() {
  // var savedMovie1 = localStorage.getItem("movie 1");
  // var savedMovie2 = localStorage.getItem("movie 2");
  // var savedTitle = localStorage.getItem("df title");
  // var savedBlurb = localStorage.getItem("df blurb");
  var savedDF = JSON.parse(localStorage.getItem("df"));

  $("#movie-input-1").val(savedDF.feature_1);
  $("#movie-input-2").val(savedDF.feature_2);
  $("#df-title-input").val(savedDF.DFTitle);
  $("#df-blurb-input").val(savedDF.DFBlurb);

  // $("#movie-input-1").val(savedMovie1);
  // $("#movie-input-2").val(savedMovie2);
  // $("#df-title-input").val(savedTitle);
  // $("#df-blurb-input").val(savedBlurb);
}

// on click function to call getSearchFields function
$("#favorite").on("click", function() {
  getSearchFields();
})

// empty/clear div which holds and displays all the content and search field values
$("#clearDiv").on("click", function() {
  $("#df-display").empty();

  // clear input text fields
  $("#movie-input-1").val("");
  $("#movie-input-2").val("");
  $("#df-title-input").val("");
  $("#df-blurb-input").val("");
})