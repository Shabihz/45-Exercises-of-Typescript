var guestlist = ["Shabih", "Batool", "Akber", "Ani"];
var dontCome = guestlist[0];
console.log(dontCome, "Nai a sakta");
guestlist.splice(0, 1, "Amir");
guestlist.forEach(function (guest) { return console.log("Salam ".concat(guest, ",would you like to dinner with me?")); });
