"use strict";

var employee = {
  name: "Alice",
  age: 25,
  title: "Engineer"
};
console.log(Object.keys(employee)); // ["name", "age", "title"]

console.log(Object.values(employee)); // ["Alice", 25, "Engineer"]

console.log(Object.entries(employee)); // [["name", "Alice"], ["age", 25], ["title", "Engineer"]]
//---------------------------

var employee1 = {
  name: "Alice",
  age: 25,
  title: "Engineer"
};
var keys = Object.keys(employee1); // ["name", "age", "title"]

keys.forEach(function (key) {
  console.log("".concat(key, ": ").concat(employee1[key]));
}); // name: Alice
// age: 25
// title: Engineer
//---------------------

var employee2 = {
  name: "Alice",
  age: 25,
  title: "Engineer"
};
var entries = Object.entries(employee2); // [["name", "Alice", ["age": 25], ["title": "Engineer"]]

entries.forEach(function (entry) {
  console.log("".concat(entry[0], ": ").concat(entry[1]));
}); // name: Alice
// age: 25
// title: Engineer
//-------------------------------------

var tallestBuildings = {
  "Burj Khalifa": {
    height: 828,
    city: "Dubai"
  },
  "Merdeka 118": {
    height: 679,
    city: "Kuala Lumpur"
  },
  "Shanghai Tower": {
    height: 632,
    city: "Shangai"
  },
  "Abraj Al-Bait Clock Tower": {
    height: 601,
    city: "Mecca"
  },
  "Ping An International Finance Center": {
    height: 599,
    city: "Shenzen"
  }
};

function printBuildingAndCity(obj) {
  // Object.entries(obj).forEach(key =>{
  //     console.log(`${key[0]} (${key[1].height}m) is located in ${key[1].city}.`);
  // });
  Object.keys(obj).forEach(function (key) {
    console.log("".concat(key, " (").concat(obj[key].height, "m) is located in ").concat(obj[key].city, "."));
  });
}

printBuildingAndCity(tallestBuildings); //----------------------------------------

function swap(obj) {
  var res = {};
  Object.keys(obj).forEach(function (key) {
    res[obj[key]] = key;
  });
  return res;
}

var myObj = {
  first: 1,
  second: 2,
  third: 3
};
console.log(myObj); // { first: 1, second: 2, third: 3 }

console.log(swap(myObj)); // { 1: "first", 2: "second", 3: "third" }
// ------------------------   Objects by refernce example

function copy(obj) {
  var res = {};
  Object.keys(obj).forEach(function (key) {
    res[key] = obj[key];
  });
  return res;
}

var firstObj = {
  one: 1,
  two: 2,
  three: 3
};
var secondObj = firstObj;
var thirdObj = copy(firstObj);
console.log(firstObj); // { one: 1, three: 3, two: 2 }

console.log(secondObj); // { one: 1, three: 3, two: 2 }

console.log(thirdObj); // { one: 1, three: 3, two: 2 }

firstObj.four = 4;
console.log(firstObj); // { four: 4, one: 1, three: 3, two: 2 }

console.log(secondObj); // { four: 4, one: 1, three: 3, two: 2 }
// thirdObj has not changed

console.log(thirdObj); // { one: 1, three: 3, two: 2 }