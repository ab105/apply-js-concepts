// const number = 4;
// const remainder = number%2;
// console.log(remainder==0);
// console.log(number%2 == 0);


const number = 145;
function isEven(number){
    if(number%2==0){
        return true;
    }
    return false;
}
const myNumber = 1653;
const isMyNumberEven = isEven(myNumber);
console.log('is my number is even',isMyNumberEven);

const herNumber = 1844;
const isherNumberEven = isEven(herNumber);
console.log('is her number is even',isherNumberEven);


//is odd function
function isOdd(number){
    if(number%2!=0){
        return true;
    }
    return false;
}

const isMyNumberOdd = isOdd(myNumber);
console.log('is my number is odd',isMyNumberOdd);

const isherNumberOdd = isOdd(herNumber);
console.log('is her number is odd',isherNumberOdd);
