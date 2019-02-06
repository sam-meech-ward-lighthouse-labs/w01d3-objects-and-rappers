
// school bus 1
var numberOfStudents = 20;
var colour = "yellow";
var capacity = 30;
var wheels = "round and round";
var isMagic = true;


// var school bus 2
var numberOfStudents2 = 20;
var colour2 = "yellow";
var capacity2 = 30;
var wheels2 = "round and round";
var isMagic2 = false;


var schoolBus1 = {
  numberOfStudents: 20,
  colour: "yellow",
  capacity: 30,
  wheels: "round and round",
  isMagic: true,
  "number of windows": NaN,
  propertyName: "💩"
};

var ಠ_ಠ = 'hello';

console.log('magic', schoolBus1.magic);
console.log('number of windows', schoolBus1["number of windows"]);
console.log("The wheels on the bus go", schoolBus1["wheels"]);


var propertyName = 'colour';

console.log(schoolBus1.propertyName);
console.log(schoolBus1[propertyName]);