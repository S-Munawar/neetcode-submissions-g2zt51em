class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    subarraySum(nums, k) {
        let count = 0

        for(let i = 0; i < nums.length; i++) {
            let subArr = []
            let sum = 0
            for(let j = i; j < nums.length; j++) {
                sum += nums[j]
                subArr.push(nums[j])
                if(sum === k) {
                    count++
                }
            }
        }
        return count

    }
}
