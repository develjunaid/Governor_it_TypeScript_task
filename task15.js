"use strict";
// Changing Guest List: You just heard that one of your guests can’t make the dinner,
//  so you need 
// to send out a new set of invitations. You’ll have to think of someone else to invite.
let invitedperson = ["junaid", "ali", "ahsan", "ahmed"];
let not_coming_person = "junaid";
let replaceguest = 'areeb';
let indexOfnot_coming_person = invitedperson.indexOf(not_coming_person);
//console.log("dear "+invitedperson[0]+" you are invited to our party because "+not_coming_person+" not coming");
invitedperson[indexOfnot_coming_person] = replaceguest;
for (let i = 0; i < invitedperson.length; i++) {
    const person = invitedperson[i];
    console.log("dear " + person + " you are invited to our party");
}
console.log(not_coming_person + " is not coming");
