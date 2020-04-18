// on click event handler for movie 1
$("#add-df").on("click", function(event) {
  event.preventDefault();

  var movie_1 = $("#movie-input-1").val().trim();
  var movie_2 = $("#movie-input-2").val().trim();

  var queryURL = "http://www.omdbapi.com/?i=tt3896198&t=" + movie_1 + "&apikey=7d0feada";
  var queryURL2 = "http://www.omdbapi.com/?i=tt3896198&t=" + movie_2 + "&apikey=7d0feada";

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

  $("#df-title-view").append(title);

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