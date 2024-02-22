var isPalindrome = function(x) {

    let len = x.toString().length;
    const myArray = x.toString().split("");
    const myArrayBack = myArray.slice().reverse();

    for(let i = 0; i < len; i++){
        if(myArray[i] === myArrayBack[i]){
            //pass
        }else{
            return false;
        }
    }
    return true;
};

//true
console.log(isPalindrome(412353214));
//false
console.log(isPalindrome(123));
//true
console.log(isPalindrome(12321));
//false
console.log(isPalindrome(12312));