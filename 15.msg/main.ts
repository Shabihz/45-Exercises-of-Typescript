let guestlist = ["Shabih" ,"Batool", "Akber", "Ani"];
let dontCome = guestlist[0];
console.log(dontCome, "Nai a sakta");
guestlist.splice(0, 1,"Amir");
guestlist.forEach(guest => console.log(`Salam ${guest},would you like to dinner with me?`));
