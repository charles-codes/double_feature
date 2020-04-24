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

    var plot = response.Plot;
    var pOne = $("<p>").text(plot);
    movieDiv.append(pOne);

    var hr = $("<hr>");
    movieDiv.append(hr);

    var director = response.Director;
    var pTwo = $("<p>").text("Directed by " + director);
    movieDiv.append(pTwo);

    var year = response.Year;
    var pThree = $("<p>").text(year);
    movieDiv.append(pThree);

    var length = response.Runtime;
    var pFour = $("<p>").text(length + "utes")
    movieDiv.append(pFour);

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

    var plot = response.Plot;
    var pOne = $("<p>").text(plot);
    movieDiv.append(pOne);

    var hr = $("<hr>");
    movieDiv.append(hr);

    var director = response.Director;
    var pTwo = $("<p>").text("Directed by " + director);
    movieDiv.append(pTwo);

    var year = response.Year;
    var pThree = $("<p>").text(year);
    movieDiv.append(pThree);

    var length = response.Runtime;
    var pFour = $("<p>").text(length + "utes")
    movieDiv.append(pFour);

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

  // logic to capture search field values and to eventually display them as buttons
  // empty array
  var dfArray = [];
  
  // object to hold each of the string values to populate the search fields
  var doubleFeature = {
    feature_1: movie_1,
    feature_2: movie_2,
    DFTitle: title,
    DFBlurb: blurb
  }

  dfArray.push(doubleFeature);

  for (var i = 0; i < dfArray.length; i++) {

    localStorage.setItem("df", JSON.stringify(dfArray[i]));
    console.log(i);

    var button = $("<button>");
    button.addClass("df-favorite-button");
    button.text(title);

    $("#buttons-view").append(button);
  }
  
  // clear input text fields
  $("#movie-input-1").val("");
  $("#movie-input-2").val("");
  $("#df-title-input").val("");
  $("#df-blurb-input").val("");
});

$(document).on("click", ".df-favorite-button", function() {
  event.preventDefault();

  console.log("I clicked the favorite button");

  var savedDF = JSON.parse(localStorage.getItem("df"));

  $("#movie-input-1").val(savedDF.feature_1);
  $("#movie-input-2").val(savedDF.feature_2);
  $("#df-title-input").val(savedDF.DFTitle);
  $("#df-blurb-input").val(savedDF.DFBlurb);
})

// empty/clear div which holds and displays all the content and search field values
$("#clear-div").on("click", function() {
  // clear both title and blurb display
  $("#df-title-view").empty();
  $("#df-blurb-view").empty();
  
  // clear both movie displays
  $("#movies-view-1").empty();
  $("#movies-view-2").empty()

  // clear input text fields
  $("#movie-input-1").val("");
  $("#movie-input-2").val("");
  $("#df-title-input").val("");
  $("#df-blurb-input").val("");
})

// clear favorite search buttons
$("#clear-buttons").on("click", function() {
  $("#buttons-view").empty();
})