class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    removeElement(nums, val) { 
    let n = nums.length
    let i = 0
    while(i < n) {
        if(nums[i] === val) {
            nums[i] = nums[--n]
        }
        else{
            i++
        }
    }
    return n
    }
}
