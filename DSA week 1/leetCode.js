var minimumOperations = function(nums) {
    let count = 0
    while(nums.some(n => n !== 0)){
        let min = Math.min(...nums.filter(n => n !== 0))
        count ++
        nums = nums.map(n => n === 0 ? 0 : n - min)
    }
    return count
};


console.log(minimumOperations([1, 5, 0, 3, 5]));