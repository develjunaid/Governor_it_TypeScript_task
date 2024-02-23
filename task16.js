"use strict";
let invitedperson = ["junaid", "ali", "ahsan", "ahmed"];
let not_coming_person = "junaid";
let replaceguest = 'areeb';
let indexOfnot_coming_person = invitedperson.indexOf(not_coming_person);
invitedperson[indexOfnot_coming_person] = replaceguest;
console.log("dear person we found big table");
let newguest = "aslam";
invitedperson.unshift(newguest); //for add new one in list
let newmiddleguest = "ajmal";
let middleindex = Math.floor(invitedperson.length / 2);
invitedperson.splice(middleindex, 0, newmiddleguest);
for (let i = 0; i < invitedperson.length; i++) {
    let person = invitedperson[i];
    console.log("dear " + person + " you are invited to our party");
}
console.log(invitedperson);


//in task16 we learn how to add in middle of an array