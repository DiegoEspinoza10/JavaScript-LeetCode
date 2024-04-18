var prefixCount = function(words, pref) {
    let count = 0;
    for (let i = 0; i < words.length; i++) {
        if (words[i].startsWith(pref)) {
            count++;
        }
    }
    return count;
};

//--Tests--
//2
console.log(prefixCount(["pay","attention","practice","attend"],"at"));
//3
console.log(prefixCount(["flower","flow","flight"],"fl"));
//0
console.log(prefixCount(["dog","racecar","car"],"at"));