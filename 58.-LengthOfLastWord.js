var lengthOfLastWord = function(s) {
    let count = 0;
    if (s[s.length - 1] === " ") {
        let j = s.length - 1;
        while (s[j] === " ") {
            j--;
        }
        s = s.substring(0, j + 1);
    }
    for(let i = s.length - 1; i >= 0; i--){
        if(s[i] != " "){
            count++;
        } else if (count > 0) {
            return count;
        }
    }
    return count;
};

//--Tests--
//5
console.log(lengthOfLastWord("Hello world "));
//4
console.log(lengthOfLastWord("   fly me   to   the moon  "));
//6
console.log(lengthOfLastWord("luffy is still joyboy"));