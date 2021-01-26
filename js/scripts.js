// Business Logic for Travel Book
function TravelBook() {
  this.places = {};
  this.currentId = 0;
}

TravelBook.prototype.assignPlacesID = function(place) {
  this.currentId += 1;
  return this.currentId;
}

TravelBook.prototype.addPlace = function(place) {
  place.id = this.assignPlacesID();
  this.places[place.id] = place;  
}

TravelBook.prototype.findPlace = function(id){
  if(this.places[id] != undefined){
    return this.places[id];
  }
  return false;
}

TravelBook.prototype.removePlace = function(id){
  if (this.places[id] === undefined) {
    return false;
  }
  delete this.places[id];
  return true
}

// Business Logic for Places
function Place(location, landmarks, date, flower) {
  this.location = location;
  this.landmarks = landmarks;
  this.date = date;
  this.flower = flower;
}


// User Interface Logic
let travelBook = new TravelBook();

function displayPlaces(travelBookToDisplay){
  let placesList = $('ul#places');
  let htmlForPlaceInfo = "";
  Object.keys(travelBookToDisplay.places).forEach(function(key){
    const place = travelBookToDisplay.findPlace(key);
    htmlForPlaceInfo += "<li id=" + place.id + ">" + place.location + "</li>";
  });
  placesList.html(htmlForPlaceInfo);
}

function showPlace(placeId){
  const place = travelBook.findPlace(placeId);
  $('div#show-place').show();
  $("span.location").html(place.location);
  $("span.landmark").html(place.landmarks);
  $("span.date").html(place.date);
  $("span.flower").html(place.flower);

  let buttons = $("div#buttons");
  buttons.empty();
  buttons.append("<button class='deleteButton' id=" + place.id + ">Delete</button>");
}

function attachPlaceListeners(){
  $('ul#places').on("click", "li", function(){
    showPlace(this.id);
  });

  $('div#buttons').on("click", ".deleteButton", function(){
    travelBook.removePlace(this.id);
    $('div#show-place').hide();
    displayPlaces(travelBook);
  })
}

$(document).ready(function(){
  attachPlaceListeners();
  $('form#new-place').submit(function(e){
    e.preventDefault();

    const inputtedLocation = $('input#new-location').val();
    const inputtedLandMark = $('input#new-landmark').val();
    const inputtedDate= $('input#new-date').val();
    const inputtedFlower = $('input#new-flower').val();

    $("input#new-first-name").val("");
    $("input#new-last-name").val("");
    $("input#new-phone-number").val("");

    let newPlace = new Place(inputtedLocation, inputtedLandMark, inputtedDate, inputtedFlower);

    travelBook.addPlace(newPlace);
    displayPlaces(travelBook);
    
  });
});