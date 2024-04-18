var removeElement = function(nums, val) {
    let counter = 0;
    for (let i = 0; i < nums.length; ) {
        if (nums[i] === val) {
            nums.splice(i, 1);
            counter++;
        } else {
            i++;
        }
    }
    console.log(`${counter}, nums = [${nums}]`);
};

//--Tests--
//5, nums = [0,1,3,0,4]
console.log(removeElement([0,1,2,2,3,0,4,2],2));
//2, nums = [2,2]
console.log(removeElement([3,2,2,3],3));
//0, nums = []
console.log(removeElement([],0));