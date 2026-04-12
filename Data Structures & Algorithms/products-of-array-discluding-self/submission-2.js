class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {

        let output = []

        let prefix = 1
        output[0] = 1
        for(let i = 1; i < nums.length; i++) {
            prefix = prefix * nums[i-1]
            output[i] = prefix
        } 

        let sufix = 1
        output[nums.length - 1] = 1 * output[nums.length - 1]
        for(let i = nums.length - 2; i >= 0; i--) {
            sufix = sufix * nums[i+1]
            output[i] = sufix * output[i]
        }

        return output

    }
}
