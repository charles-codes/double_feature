// on click event handler for movie 1
$("#add-movie-1").on("click", function(event) {
  event.preventDefault();

  var movie_1 = $("#movie-input-1").val().trim();

  var queryURL = "http://www.omdbapi.com/?i=tt3896198&t=" + movie_1 + "&apikey=7d0feada"

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

  // clear movie input 1 text field
  $("#movie-input-1").val("");
})

// on click event handler for movie 2
$("#add-movie-2").on("click", function(event) {
  event.preventDefault();

  var movie_2 = $("#movie-input-2").val().trim();

  var queryURL = "http://www.omdbapi.com/?i=tt3896198&t=" + movie_2 + "&apikey=7d0feada"

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

    $("#movies-view-2").append(movieDiv);

    // setting movie-1 to localStorage
    localStorage.setItem("movie-1", movieDiv);
  })

  // clear movie input 2 text field
  $("#movie-input-2").val("");
})

// on click event handler for displaying double-feature title
$("#add-df-title").on("click", function(event) {
  event.preventDefault();

  var title = $("#df-title-input").val().trim();
  var titleH2 = $("<h2>");

  titleH2.text(title);

  $("#df-title-view").append(title);

  // setting title to localStorage
  localStorage.setItem("title", title);
  console.log(title);

  // clear the double-feature title text field
  $("#df-title-input").val("");
})

// on click event handler for displaying double-feature blurb
$("#add-df-blurb").on("click", function(event) {
  event.preventDefault();
  
  var blurb = $("#df-blurb-input").val().trim();
  var blurbP = $("<p>");

  blurbP.text(blurb);

  $("#df-blurb-view").append(blurbP);

  // clear the double-feature blurb text field
  $("#df-blurb-input").val("");
})

$("#favorite").on("click", function(event) {
  event.preventDefault();

  var faveTitle = localStorage.getItem("title");
  $("#df-title-view").text(faveTitle);
})