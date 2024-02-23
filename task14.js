"use strict";
// Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite?
//  Make a list that includes at least three people you’d like to invite to dinner.
// Then use your list to print a message to each person, inviting them to dinner.
Object.defineProperty(exports, "__esModule", { value: true });
exports.invitedperson = void 0;
var invitedperson = ["junaid", "ali", "ahsan", "ahmed"];
exports.invitedperson = invitedperson;
for (var i = 0; i < invitedperson.length; i++) {
    var person = invitedperson[i];
    console.log("dear " + person + " you are invited to our party");
}
