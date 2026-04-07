class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        let count = 0
        let majorityElement = nums[0]
        for(const num of nums) {
            if(num === majorityElement) {
                count++
            }
            else{
                count--
                if(count <= 0) {
                    majorityElement = num
                }
            }
        }
        return majorityElement
    }
}
