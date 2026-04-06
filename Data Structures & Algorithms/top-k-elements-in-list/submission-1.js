class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let res = {}
        for(let i = 0; i < nums.length; i++) {
            res[nums[i]] = (res[nums[i]] | 0)
            for(let j = 1; j < nums.length; j++) {
                if(nums[i] == nums[j]) {
                    res[nums[i]]++
                }
            }
        }
        const keys = Object.keys(res).sort((a, b) => res[b] - res[a])
        let Output = []
        for(let i = 0; i < k; i++){
            Output.push(keys[i])
        }
        return Output
    }
}
