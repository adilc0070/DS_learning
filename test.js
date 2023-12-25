// remove elements from an array

function removeElement(nums,val){
    for(i=0;i<nums.length;i++){
        if(nums[i]===val){
            nums.splice(i,1)
            i--
        }
    }
    console.log(nums);
}
//time complexity O(n^2)
let nums = [0,1,2,2,3,0,4,2], val = 2
removeElement(nums,val)