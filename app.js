var arrayPairSum = function(nums) {
    let sum=0
    nums.sort((a,b)=>a-b)
    for(let i=0;i<nums.length;i+2){
        sum+=Math.min(nums[i],nums[i+1])
    }
    return sum
};

console.log(arrayPairSum([6,2,6,5,1,2]));