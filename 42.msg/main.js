//define a function to print each magician name from an array
function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
function make_great(magicians) {
    return magicians.map(function (name) { return "The Great ".concat(name); });
}
// define an array containing magicians name
var magician_names = ["shabih", "Ani", "Zain", "Batool"];
//call make_great function to modify magitians name
var great_magicians = make_great(magician_names);
//print great_magicians to show modify list of magicians
console.log(great_magicians);
