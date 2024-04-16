type Car= {
    manufacturer: string;
    modelName:string;
    [key:string]:any;//Allow any additional properties
}
function carInfo(manufacturer:string,modelName:string,options:Partial<Car>):Car{
return {
    manufacturer:manufacturer,
    modelName:modelName,
    ...options
          };
}

//cal the function with required information and additional name-value pairs
let Car = carInfo("Toyota","carola",{color:"blue",year:2022});
//Print the returned object
console.log(Car);