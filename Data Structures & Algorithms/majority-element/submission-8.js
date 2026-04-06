class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        let count = 0
        let candidate = nums[0]

        for(const num of nums) {
            
            if(candidate === num) {
                count++
            }
            else {
                count--
                if(count < 0) {
                    candidate = num
                }
            }
        }
        return candidate
    }
}
