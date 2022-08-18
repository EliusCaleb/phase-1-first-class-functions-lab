// Code your solution in this file!

const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

 let returnFirstTwoDrivers= function () {
  return drivers.slice(0,2);
}
console.log (drivers.slice(0,2));






let returnLastTwoDrivers= function () {
    return drivers.slice(2)
  }
  console.log (drivers.slice(2));

  const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
  console.log(selectingDrivers);

  function createFareMultiplier(number) {
    return function (multiplier) { 
      const fareMultiplier = number * multiplier
      return fareMultiplier;

    };
  };

const fareDoubler  = function createFareMultiplier(fare) {  
       return fare* 2 
};

const fareTripler  = function createFareMultiplier2(fares){
     return fares * 3 
};


function  selectDifferentDrivers(drivers , newDrivers ){
     return newDrivers(drivers);
}