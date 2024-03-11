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
