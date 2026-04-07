class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let count = new Map()
        let list = Array.from({length: nums.length + 1}, () => [])
        let res = []
        for(const num of nums) {
            count.set(num, (count.get(num) || 0) + 1)
        }
        for(const [key, value] of count) {
            list[value].push(key)
        }
        for(let i = list.length - 1; i >= 0; i--) {
            for(const n of list[i]) {
                res.push(n)
                if(res.length === k) {
                    return res
                }
            }
        }

    }
}
