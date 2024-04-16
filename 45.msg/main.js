var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function carInfo(manufacturer, modelName, options) {
    return __assign({ manufacturer: manufacturer, modelName: modelName }, options);
}
//cal the function with required information and additional name-value pairs
var Car = carInfo("Toyota", "carola", { color: "blue", year: 2022 });
//Print the returned object
console.log(Car);
