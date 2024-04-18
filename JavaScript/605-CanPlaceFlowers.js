var canPlaceFlowers = function(flowerbed, n) {
    let i = 0;
    const maxIndex = flowerbed.length - 1;
    while(n > 0 && i <= maxIndex){
        if (flowerbed[i] === 0 && (i === 0 || flowerbed[i - 1] === 0) && (i === maxIndex || flowerbed[i + 1] === 0)) {
            flowerbed[i] = 1;
            n--;
        }
        i++;
    }
    return n <= 0;
};

//--Tests--
//true
console.log(canPlaceFlowers([1,0,0,0,1],1));
//false
console.log(canPlaceFlowers([1,0,0,0,1],2));
//true
console.log(canPlaceFlowers([0,0,1,0,0],1));