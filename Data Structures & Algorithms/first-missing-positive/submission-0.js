class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    firstMissingPositive(nums) {

        nums.sort((a, b) => a - b)
        let res = 1
        for(const num of nums) {
            if(num > 0 && res < num) {
                return res
            }
            if(num === res) {
                res++
            }
        }
        return res
    }
}
