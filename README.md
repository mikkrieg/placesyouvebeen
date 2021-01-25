# _Places you've been_

#### _Track all the places that we have been and displays info about them to user_

#### By _**Michael Kriegel & Levi Kohler**_

##### This project is a practice project

## Technologies Used

* _HTML/CSS_
* _JavaScript_

### Libaries Used

* _Bootstrap_
* _JQuery_

## Description

__


## Specs

**Describe:** Places()
<br/>
**Test:** Will create place objects
<br/>
**Expect:** Places("Portland", "bridges", "1/25/2021", "Roses").toEqual(place {location:"Portland", landmarks:"bridges", date: "1/25/2021", flower: "Roses"};)
<br/>

**Describe:** travelBook()
<br/>
**Test:** Create Travel Book object
</br>
**Expect:** travelBook().toEqual(travelBook{places: {}});

**Describe:** travelBook.prototype.addPlace()
<br/>
**Test:** Add places to our travelBook
</br>
**Expect:** travelbook.addPlace(place).toEqual(travelbook{places: {place}});

**Describe:** travelBook.prototype.addPlace()
<br/>
**Test:** Add numerical ID's to each place
</br>
**Expect:** travelbook.addPlace(place).toEqual(travelbook{places: {1: place{}});

**Describe:** travelBook.prototype.findPlace();
<br/>
**Test:** To find a place in the Travel Book
<br/>
**Expect:** travelBook.findPlace(id).toEqual(place{id: id})

**Describe:** travelBook.prototype.removePlace();
<br/>
**Test:** To remove a place from the travel book
<br/>
**Expect:** travelBook.removePlace(id).toEqual(travelbook{places{id, id, id} - id })

## Setup/Installation Requirements

### Local Machine
* _Clone this repository to your machine_
* _Navigate to the top level directory_
* _Open index.html in your browser_

## Known Bugs

* __

## License

[MIT](https://opensource.org/licenses/MIT)

Copyright(c) 2021 Michael Kriegel

## Contact Information

Michael Kriegel: mikkrieg@gmail.com
