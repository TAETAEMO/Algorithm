/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    
    for(let i=0;i<flowerbed.length;i++){
        if(n === 0)
            return true;
			
		//If 0 then only check
        if(!flowerbed[i]){
            let prev = false, next = false;
			
			//If previous is 0 also or this is the start then set previous to true
            if(i-1 >=0 && !flowerbed[i-1]){
                prev = true;
            }else if(i==0){
                prev = true;
            }
            
			//If next is 0 also or this is the end then set next to true
            if(i+1 < flowerbed.length && !flowerbed[i+1]){
                next = true;
            }else if(i == flowerbed.length - 1){
                next = true;
            }
            
			//If prev and next are true then reduce 1s and set current to 1
            if(prev && next){
                n--;
                flowerbed[i] = 1;
            }
        }
    }
    
    return n=== 0;
    
};