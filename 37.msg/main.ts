// Making a function
function make_shirt(size:string="Large" ,printMessage: string ="I Love Typescript"){
    console.log(`creating a ${size} shirt with the ${printMessage} print on shirt`)
}
//calling a function wiyh by-default values
make_shirt();
//calling a function now with Medium size and default message
make_shirt("Medium");
//calling a function now with small size and different print message
make_shirt("small","I Love Javascript")