class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let count = {}
        let freq = new Array(nums.length + 1).fill(null).map(() => [])

        for(const num of nums) {
            count[num] = (count[num] | 0) + 1
        }

        for(const key in count) {
            freq[count[key]].push(parseInt((key)))
        }

        let res = []
        for(let i = freq.length - 1; i > 0; i--) {
            if (freq[i]) {
                for(const n of freq[i]) {
                    res.push(n)
                    if(res.length === k) {
                        return res
                    }
                }
            }
        }
    }
}
