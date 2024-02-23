var hammingWeight = function(n) {
    let binaryString = n.toString(2);
    let total = 0;
    for (let i = 0; i < binaryString.length; i++) {
        if (binaryString[i] === '1') {
            total++;
        }
    }
    return total;
};

//--Tests--
//3
console.log(hammingWeight('00000000000000000000000000001011'));
//5
console.log(hammingWeight('1001001001001001000'));
//1
console.log(hammingWeight('00000000000000000000000010000000'));