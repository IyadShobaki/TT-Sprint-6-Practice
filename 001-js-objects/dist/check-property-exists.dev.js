"use strict";

function getUserEmail(user) {} // Your code here
// Example usage:


var user1 = {
  name: "Alice",
  contact: {
    email: "alice@example.com"
  }
};
var user2 = {
  name: "Bob"
};
console.log(getUserEmail(user1)); // "alice@example.com"

console.log(getUserEmail(user2)); // undefined

console.log(getUserEmail()); // undefined