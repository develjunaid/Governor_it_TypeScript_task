// Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite?
//  Make a list that includes at least three people you’d like to invite to dinner.
// Then use your list to print a message to each person, inviting them to dinner.


let invitedperson=["junaid","ali","ahsan","ahmed"];
for (let i = 0; i < invitedperson.length; i++) {
    const person = invitedperson[i];
    console.log("dear "+person+" you are invited to our party");
}
export{invitedperson}