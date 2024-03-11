// creating guest list array
let guestlist = ["Shabih" ,"Batool", "Akber", "Ani"];
// making variable for those guest who cant come
let dontCome = guestlist[0];
// print the name of guest who cant come
console.log(dontCome, "Nai a sakta");
//Add or remove values from Guest list array
guestlist.splice(0, 1,"Amir");
//Message Print for Bigger Table
console.log("Good News ! We have Found a Bigger Table For Dinner");
//Adding a new vaue at starting index of array
guestlist.unshift("Alia")
//Adding a new vaue at ending index of array
guestlist.push("zain");
// Get a middleindex of our guest list array
let middleindex:number = Math.floor (guestlist.length/2);
// Adding a new guest to middle index of array
guestlist.splice(middleindex,0,"Ali");
// Print Message of Updated List
console.log("Updated List of Our Guest");
// Sending a invitation to our guest one by one with there names
 
guestlist.forEach(guest => console.log(`Salam ${guest},would you like to dinner with me?`));
// Inform that only two guest can be invited for dinner
console.log("Unfortunately, the new dinner table wont arrive on time,so I can only invite two Guest");
// using while-loop to remove guests from the array until only two names remain
while(guestlist.length > 2) {
let removedguest = guestlist.pop();
console.log(`Sorry, ${removedguest} I cant invite you to dinner`);
}
// sending a invitations to the last two guest on the list
console .log("Invitations to the last 2 guests");
guestlist.forEach(lasttwo => console.log(`Luckly ${lasttwo}, you are still invited to dinner`));

// Removing last two guest from the list
guestlist.pop();
guestlist.pop();
console.log("Empty list:", guestlist);