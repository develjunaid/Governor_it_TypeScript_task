"use strict";
//Store the locations in a array. Make sure the array is not in alphabetical order.
let favplaces = ["dubai", "paris", "kashmir", "austrailia", "china"];
// Print your array in its original order.
console.log("orignal list " + favplaces);
//Print your array in alphabetical order without modifying the actual list.
console.log("sort alphabet LIST " + [...favplaces].sort());
//Show that your array is still in its original order by printing it.
console.log("Orignal LIST " + favplaces);
//Print your array in reverse alphabetical order without changing the order of the original list.
console.log("reverse alphabet sort LIST " + [...favplaces].sort().reverse());
//Show that your array is still in its original order by printing it again.
console.log("orignal list " + favplaces);
//Reverse the order of your list. Print the array to show that its order has changed.
console.log("Reverse LIST " + favplaces.reverse());
//Reverse the order of your list again. Print the list to show it’s back to its original order.
console.log("Reverse again LIST " + favplaces.reverse());
// Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
favplaces.sort();
console.log("orignal list " + favplaces);
