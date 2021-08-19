function getfactorial(number){
    let factorial = 1;
    console.log(number);
    for(let i = 1; i<=number; i++){
        factorial = factorial*i;
        console.log(i,factorial);
    }
    return factorial;
}

const getMyFactorial = getfactorial(7);
console.log(getMyFactorial);