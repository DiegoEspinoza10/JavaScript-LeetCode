var merge = function(nums1, m, nums2, n) {
    let my_array1 = nums1.slice(0,m);
    let my_array2 = nums2.slice(0,n);
    let new_array = my_array1.concat(my_array2)
    
    for(let i = 0; i < new_array.length; i++){
        for(let j = i + 1; j < new_array.length; j++){
            let temp = 0;
            if(new_array[i] > new_array[j]){
                temp = new_array[i];
                new_array[i] = new_array[j];
                new_array[j] = temp
            }
        }
    }
    return new_array
};

//--Tests--
//[1,2,2,3,5,6]
console.log(merge([1,2,3,0,0,0],3,[2,5,6],3))
//[1]
console.log(merge([1],1,[],0))
//[1,2,3,4,5,6]
console.log(merge([4,5,6,0,0,0],3,[1,2,3],3))