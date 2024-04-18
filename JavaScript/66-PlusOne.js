var plusOne = function(digits) {
    let numero = "";
    for(let i = 0; i < digits.length; i ++){
        numero = numero + digits[i];
    }
    let varPlusone = BigInt(numero) + 1n;
    
    return (varPlusone.toString().split("").map(Number));
};

//--Tests--
//[1,0]
console.log(plusOne([9]));
//[1,2,4]
console.log(plusOne([1,2,3]));
//[4,3,2,2]
console.log(plusOne([4,3,2,1]));