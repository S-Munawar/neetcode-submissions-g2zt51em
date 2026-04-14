class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    subarraySum(nums, k) {

        let count = new Map()
        let prefixSum = 0
        let res = 0
        count.set(0, 1)

        for(let i = 0; i < nums.length; i++) {
            prefixSum += nums[i]
            let diff = prefixSum - k
            if (count.has(diff)) {
                res += count.get(diff)
            }
            count.set(prefixSum, (count.get(prefixSum) || 0) + 1)
        }

        return res

    }
}
