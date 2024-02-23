//31-No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
var userNames = ["User1", "User2", "User3", "User4", "User5"];
if (userNames.length > 0) {
    userNames = [];
    console.log("All usernames have been removed.");
}
else {
    console.log("We need to find some users!");
}
