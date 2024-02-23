
let invitedperson=[ 'aslam', 'areeb', 'ajmal', 'ali', 'ahsan', 'ahmed' ];
console.log("we can invite only two people for dinner.");
while(invitedperson.length>2){
    let removePerson=invitedperson.pop();
    console.log("dear "+ removePerson +",we’re sorry we can’t invite you to dinner.");
}
for (let i = 0; i < invitedperson.length; i++) {
    const element = invitedperson[i];
    console.log("dear "+element+ " You’re still invited");

}
//• Remove the last two names from your list, so you have an empty list
while(invitedperson.length>0){
    invitedperson.pop();

}

console.log("invited person ???"+invitedperson);


//im task17 we learn how to revome string from an array