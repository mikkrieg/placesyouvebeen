function TravelBook() {
  this.places = {};
}

function Places(location, landmarks, date, flower) {
  this.location = location;
  this.landmarks = landmarks;
  this.date = date;
  this.flower = flower;
}

TravelBook.prototype.addPlace = function(place){
  this.places[place.location] = place;
}


























$(document).ready(function(){

});