class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        let n = nums.length
        nums.sort((a, b) => a - b)
        return nums[Math.floor(n/2)]
    }
}
