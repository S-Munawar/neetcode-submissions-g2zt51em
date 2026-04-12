class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {

        let prefix = []
        let sufix = []
        let output = []

        let j = nums.length - 1
        for(let i = 0; i < nums.length; i++) {
            let prefixProduct = (prefix[i-1] ?? 1) * nums[i]
            let sufixProduct = (sufix[j+1] ?? 1) * nums[j]
            prefix[i] = prefixProduct
            sufix[j] = sufixProduct
            j--
        }

        for(let i = 0; i < nums.length; i++) {
            let productExceptSelf = (sufix[i+1] ?? 1) * (prefix[i-1] ?? 1)
            output.push(productExceptSelf)
        }

        return output

    }
}
