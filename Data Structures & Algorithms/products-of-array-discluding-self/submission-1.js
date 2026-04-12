class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {

        let prefix = []
        let sufix = []
        let output = []

        prefix[0] = 1
        for(let i = 1; i < nums.length; i++) {
            let product = prefix[i-1] * nums[i-1]
            prefix[i] = product
        } 

        sufix[nums.length - 1] = 1
        for(let i = nums.length - 2; i >= 0; i--) {
            let product = sufix[i+1] * nums[i+1]
            sufix[i] = product
        }

        for(let i = 0; i < nums.length; i++) {
            let productExceptSelf = sufix[i] * prefix[i]
            output.push(productExceptSelf)
        }

        return output

    }
}
