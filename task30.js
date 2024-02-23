//30-Hello Admin: Make a array of five or more usernames, including the name 'admin'. 
//Imagine you are writing code that will print a greeting to each user after
// they log in to a website. Loop through the array, and print a greeting to each user:
var usernames = ['admin', 'junaid', 'ahmed', 'ali', 'imran'];
var count = 0;
//If the username is 'admin', 
//print a special greeting, such as Hello admin, would you like to see a status report?
for (var i = 0; i < usernames.length; i++) {
    if (usernames[i] == "admin") {
        count++;
        console.log("Hello admin, would you like to see a status report?");
    }
}
//• Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.
if (count == 0) {
    console.log("Hello Eric, thank you for logging in again.");
}
