// creating a Array
let userNames =["zain","Ali","Admin","Ani","Akber"];
//using forEach loop on Array
userNames.forEach(function (oneuser) {
    if (oneuser === "Admin") {
        console.log("Hello ".concat(oneuser, ",would you like to see a status report?"));
    }
    else {
        console.log("Hello ".concat(oneuser, ",thank you for logging in again."));
    }
});

 