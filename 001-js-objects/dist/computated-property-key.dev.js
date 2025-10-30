"use strict";

var phonebook = {
  Lily: {
    mobile: "+16235554420",
    work: "+12445552374",
    home: "+19775552223"
  },
  Tim: {
    mobile: "+4235555616"
  }
};

function addPhoneNumber(name, numberType, number) {
  if (name in phonebook == false) {
    phonebook[name] = {};
    phonebook[name][numberType] = number;
  } else {
    phonebook[name][numberType] = number;
  }
} // Adding a new phone number for an existing contact should still work.


addPhoneNumber("Tim", "home", "+4235555212");
console.log(phonebook.Tim.home); // "+4235555212"

console.log(phonebook.Tim.mobile); // "+4235555616"
// Adding a new phone number for an new contact should also work.

addPhoneNumber("Kyle", "mobile", "+5553142534");
console.log(phonebook.Kyle.mobile); // "+5553142534"