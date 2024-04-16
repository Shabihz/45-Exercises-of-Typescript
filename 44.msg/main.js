//Define a function with a rest parameter that accept items arguments representing our sandwich
function makeSandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("\nMaking a sandwich with the following items:\n ");
    items.forEach(function (singleItems) { return console.log(singleItems); });
    console.log("\n Now Enjoy Sandwich");
}
//call the functions three times with different number of argument
makeSandwich("Chicken", "Cheez", "Mayo", "Egg");
makeSandwich("Bread", "Butter");
makeSandwich("Bread", "Butter", "Chicken", "Mayo", "Egg", "Cheez");
