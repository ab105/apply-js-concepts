// function getFatorial(number){
//     let factorial = 1;
//     let i = 1;
//     while(i<=number){
//         factorial = factorial * i;
//         i++;
//     }
//     return factorial;
// }

// const myFactorial = getFatorial(6);
// console.log(myFactorial);


//decrementing loop for factorial

function getfactorial(number){
    let factorial = 1;
    let i = number;// i ta number hobe aikane amra number theke kome kome count hobe
    while(i>=1){
        //number to i hobe means 1 hobe
        factorial = factorial * i;
        i--;
    }
    return factorial;
}

const myFactorial = getfactorial(6);
console.log(myFactorial);


//for loop reverse
function getfactorial2(number){
    let factorial = 1;
    for(let i=number; i>=1; i--){
        factorial = factorial*i;
    }
    return factorial;
}
const myfactorial = getfactorial2(4);
console.log(myfactorial);