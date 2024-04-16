//define a function to print each magician name from an array
function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
function make_great(magicians) {
    return magicians.map(function (name) { return "The Great ".concat(name); });
}
// define an array containing magicians name
var magician_names = ["shabih", "Ani", "Zain", "Batool"];
//Making a copy of original throught .slice() function
var copy_magician_names = magician_names.slice();
//Modify the copied array to include "The Great" with their names
var copy_great_megician = make_great(copy_magician_names);
//show both array original and copied
//original
console.log("original array\n");
show_magicians(magician_names);
//copied
console.log("\ncopied array\n");
show_magicians(copy_great_megician);
