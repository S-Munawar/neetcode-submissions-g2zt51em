class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {
        let arr = []
        const len = nums.length
        for (let i = 0; i < len; i++) {
            arr[i] = arr[i + len] = nums[i]
        }
        return arr
    }
}
