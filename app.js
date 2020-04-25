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
  
  // clear input text fields
  $("#movie-input-1").val("");
  $("#movie-input-2").val("");
  $("#df-title-input").val("");
  $("#df-blurb-input").val("");
});

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