// Making a function
function make_shirt(size, printMessage) {
    if (size === void 0) { size = "Large"; }
    if (printMessage === void 0) { printMessage = "I Love Typescript"; }
    console.log("creating a ".concat(size, " shirt with the ").concat(printMessage, " print on shirt"));
}
//calling a function wiyh by-default values
make_shirt();
//calling a function now with Medium size and default message
make_shirt("Medium");
//calling a function now with small size and different print message
make_shirt("small", "I Love Javascript");
