var findMaxAverage = function(nums, k) {
    let sum=0, a=k
    for(let i=1;i<=k;i++){
        sum+=nums[i]
    }
    return sum/k
};

console.log(findMaxAverage([1,12,-5,-6,50,3], 4));