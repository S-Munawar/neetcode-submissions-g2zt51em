class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        let count = 0
        let n = nums.length
        for(let i = 0; i < n; i++) {
            for(let j = 0; j < nums.length; j++) {
                if(nums[i] == nums[j]) {
                    count++
                }
            }
            if(count > Math.floor(n/2)) {
                return nums[i]
            }
        } 
    }
}
