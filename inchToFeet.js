function inchToFeet(inches){
    var feet = inches/12;
    return feet;
}

var inch = 132;
var feet = inchToFeet(inch);
console.log('my inches  in  feet',feet);

var dadiInch = 144;
var feet = inchToFeet(dadiInch);
console.log('dadi inches in feet',feet);

var naniInch = 156;
var feet = naniInch/12;
// console.log(feet);

var nanaInch = 144;
var feet = nanaInch/12;
// console.log(feet);


//mile to kilometers

function mileToKilometers(miles){
    var km = miles*1.60934;
    return km;
}
var marathon = mileToKilometers(26.2);
console.log('marathon in km',marathon);

