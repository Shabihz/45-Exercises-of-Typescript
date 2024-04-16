//Define a function with a rest parameter that accept items arguments representing our sandwich
function makeSandwich(...items:string[]){
    console.log("\nMaking a sandwich with the following items:\n ");
    items.forEach(singleItems =>console.log(singleItems));
    console.log("\n Now Enjoy Sandwich");
}

//call the functions three times with different number of argument
makeSandwich("Chicken","Cheez","Mayo","Egg");
makeSandwich("Bread","Butter");
makeSandwich("Bread","Butter","Chicken","Mayo","Egg","Cheez")