var romanToInt = function(s) {
    const romanLetter = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };

    let total = 0;
    let previous = 0;

    for(let i = s.length - 1; i >= 0; i--) {
        const current = romanLetter[s[i]];
        if (current < previous) {
            total -= current; 
        } else {
            total += current; 
        }
        previous = current;
    }
    return total;
};

//--Tests--
//3
console.log(romanToInt("III"));
//58
console.log(romanToInt("LVIII"));
//1994
console.log(romanToInt("MCMXCIV"));