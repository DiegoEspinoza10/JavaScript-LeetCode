var strStr = function(haystack, needle) {
    return haystack.indexOf(needle);
};
//--Tests--
//0
console.log(strStr("sadbutsad", "sad"));
//2
console.log(strStr("hello", "ll"));
//-1
console.log(strStr("aaaaa", "bba"));