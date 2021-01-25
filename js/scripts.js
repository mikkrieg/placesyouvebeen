// Business Logic for Travel Book
function TravelBook() {
  this.places = {};
  this.currentId = 0;
}

TravelBook.prototype.assignPlacesID = function(place) {
  this.currentId += 1;
  return this.currentId;
}

// Business Logic for Places
function Places(location, landmarks, date, flower) {
  this.location = location;
  this.landmarks = landmarks;
  this.date = date;
  this.flower = flower;
}

TravelBook.prototype.addPlace = function(place) {
  place.id = this.assignPlacesID();
  this.places[place.id] = place;
}










$(document).ready(function(){

});