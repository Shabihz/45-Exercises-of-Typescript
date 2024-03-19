//Array of current users
var current_users = ["ali", "Ani", "Zain", "Akber", "Batool"];
// array of new users
var new_users = ["Ali", "Ani", "shabih", "Muhib", "Abbas"];
//loop through new users to check to user name avaliblity
new_users.forEach(function (new_one_users) {
    //    Making a condition for username already exist and save in our_condition variable
    var our_condition = current_users.some(function (current_one_users) { return current_one_users.toLowerCase() === new_one_users.toLowerCase(); });
    //print different messages using
    if (our_condition) {
        console.log("Sorry ".concat(new_one_users, " is already taken!"));
    }
    else {
        console.log("This username ".concat(new_one_users, " in avaliable"));
    }
});
