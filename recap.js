//variable
var time = '10:15pm';
var bookPrice = 150;
var isColorwhite = false;

//let const var


//value of variable could change

let price = 27;
price = 29;
price = 38;

//value of the variable will not change

const myName = 'Abida Anjum';
console.log(myName);
myName = 22;

//array
var partners = ['sajid', 'mojid', 'nojid', 'lajit'];
var elementCount = partners.length;
var nojidIndex = partners.indexOf('nojid');
partners.push('fajil');
partners.pop();

partners.shift();
partners.unshift('teachers');

//conditionals

if(bookPrice < 120){
    console.log('i will by this book');

}
else{
    console.log('mama kichu discountr den na apni na amar mama');
}



//loop

var i=0;
while(i<=17){
    //do some work
    i++;
}

for(var i=0; i<=17; i++){

}


//function
function isMoonUp(time){
    if(time>=19 && time <= 5){
        return true;
    }
    return false;
}
var moonStatus = isMoonUp(21);
console.log(moonStatus);


//object

