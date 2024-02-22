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

console.log(romanToInt("MCMXCIV"));