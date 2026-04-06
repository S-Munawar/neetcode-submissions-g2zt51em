class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let count = {}

        for(const num of nums) {
            count[num] = (count[num] | 0) + 1
        }
        const sortedArr = Object.keys(count).sort((a, b) => count[b] - count[a])
        return sortedArr.slice(0, k)
    }
}
