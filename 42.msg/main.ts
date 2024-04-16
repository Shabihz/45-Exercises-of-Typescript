//define a function to print each magician name from an array
function show_magicians(magicians:string[]){
    magicians.forEach(name => console.log(name));
}
function make_great(magicians:string[]){
return magicians.map(name =>`The Great ${name}`);
}
// define an array containing magicians name
let magician_names = ["shabih","Ani","Zain","Batool"];
//call make_great function to modify magitians name
let great_magicians=make_great(magician_names);
//print great_magicians to show modify list of magicians
console.log(great_magicians)