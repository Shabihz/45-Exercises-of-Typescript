//define a function to print each magician name from an array
function show_magicians(magicians:string[]){
    magicians.forEach(name => console.log(name));
}
function make_great(magicians:string[]){
return magicians.map(name =>`The Great ${name}`);
}
// define an array containing magicians name
let magician_names = ["shabih","Ani","Zain","Batool"];

//Making a copy of original throught .slice() function
let copy_magician_names = magician_names.slice()

//Modify the copied array to include "The Great" with their names
let copy_great_megician=make_great(copy_magician_names);

//show both array original and copied

//original
console.log("original array\n")
show_magicians(magician_names);

//copied
console.log("\ncopied array\n")
show_magicians(copy_great_megician);

