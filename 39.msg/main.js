//creating a funtion with parameter which returns values in string
function city_country(city, country) {
    return "".concat(city, " , ").concat(country);
}
//calling a function and print the returned value
console.log(city_country("Karachi", "Pakistan"));
console.log(city_country("Tokyo", "Japan"));
console.log(city_country("Berline", "Germany"));