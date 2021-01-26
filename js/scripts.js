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

$(document).ready(function(){
  $('form#new-place').submit(function(e){
    e.preventDefault();

    const inputtedLocation = $('input#new-location').val();
    const inputtedLandMark = $('input#new-landmark').val();
    const inputtedDate= $('input#new-date').val();
    const inputtedFlower = $('input#new-flower').val();

    let newPlace = new Place(inputtedLocation, inputtedLandMark, inputtedDate, inputtedFlower);

    travelBook.addPlace(newPlace);
    displayPlaces(travelBook);
    
  });
});