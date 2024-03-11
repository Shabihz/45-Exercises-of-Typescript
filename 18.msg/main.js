var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Making a Array of countries and Print its origenal order
var countriesTovisit = ["china", "Denmark", "Brazile", "Argentina"];
console.log("original order:", countriesTovisit);
// Print the Array in Alphabetical order
console.log("Alphabetical order: ", __spreadArray([], countriesTovisit, true).sort());
// show that the array is still in original order
console.log("still in original order:");
//Print the array in reverse order without modifying the actual array list
console.log("Reverse order:", __spreadArray([], countriesTovisit, true).reverse());
// show that the array is still in its original order
console.log("still in original order:", countriesTovisit);
//we have change the original array order now
console.log("orinal array reversed:", countriesTovisit.reverse());
//print the array to show that its back to its original order
console.log("Back to original order:", countriesTovisit.reverse());
// Print the array to show that alphabetical order now
console.log("sorted in alphabetical order:", countriesTovisit.sort());
//we have change the original array order again
console.log("orinal array reversed again:", countriesTovisit.reverse());
