/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumCount = function(nums) {
    let nCount = 0;
    let pCount = 0;

    nums.forEach(n => {
        if(n > 0) {
            pCount +=1;
        }else if (n< 0){
            nCount +=1;
        }
    })

    return nCount > pCount ? nCount : pCount;
};