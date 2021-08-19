// let factorial = 1;
// for(let i=1; i<=5; i++){
//     factorial = factorial * i;

// }
// console.log(factorial);

function getfactorial(number){
    let factorial = 1;
    for(let i=1; i<=number; i++){
        factorial = factorial*i;
    }
    return factorial;
}

var firstfactorial = getfactorial(7);
console.log('factorial of 7',firstfactorial);

var secondfactorial = getfactorial(9);
console.log('factorial of 9',secondfactorial);

var thirdfactorial = getfactorial(4);
console.log('factorial of 4',thirdfactorial);

