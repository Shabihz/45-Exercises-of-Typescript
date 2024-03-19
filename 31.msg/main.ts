let userName = ["Ali","Ani","Akber","Admin","Zain"];
userName = []
if (userName.length === 0 ){
console.log("your Array in Empty We need to find some users!")
}else{
    //using forEach loop on Array
    userName.forEach(oneuser => {
        if (oneuser === "Admin") {
 console.log(`Hello ${oneuser},would you like to see a status report?`);
        }else{
console.log(`Hello ${oneuser},thank you for logging in again.`);
}
    })
    }