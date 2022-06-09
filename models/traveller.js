const Journey = require("./journey");

const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
  return this.journeys.map((journey) => {
    return journey.startLocation
  })
};

Traveller.prototype.getJourneyEndLocations = function () {
  return this.journeys.map((journey) => {
    return journey.endLocation
  })
};
// The map method creates a new array populated with the results of calling a provided function on every element in the calling array.

Traveller.prototype.getJourneysByTransport = function (transport) {
  return this.journeys.filter((journey) => {
    return journey.transport === transport;
  })
};

//The filter() method creates a new array with all elements that pass the test implemented by the provided function.

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  return this.journeys.every((journey) => {
    return journey.distance >= minDistance;
  })
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
  return this.journeys.reduce((total, journey) =>{
    return total += journey.distance;
  }, 0)
};

Traveller.prototype.getUniqueModesOfTransport = function () {
  
  return this.journeys.map((journey) => {
    return self.indexOf(value) === index;
    

  })
  
  return journey.transport
};


module.exports = Traveller;
