var searchInsert = function(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] >= target) {
            return i;
        }
    }
    return nums.length;
};

//--Tests--
//2
console.log(searchInsert([1,3,5,6], 5));
//1
console.log(searchInsert([1,3,5,6], 2));
//4
console.log(searchInsert([1,3,5,6], 7));