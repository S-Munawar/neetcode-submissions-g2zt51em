class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        let count = 0
        let majorityElement = 0
        for(const num of nums) {
            if(count === 0) {
                majorityElement = num
            }
            count += majorityElement === num ? 1 : -1
        }
        return majorityElement
    }
}
