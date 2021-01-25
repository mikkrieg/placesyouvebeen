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
function Places(location, landmarks, date, flower) {
  this.location = location;
  this.landmarks = landmarks;
  this.date = date;
  this.flower = flower;
}



$(document).ready(function(){

});