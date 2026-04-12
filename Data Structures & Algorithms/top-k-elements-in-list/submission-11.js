class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const result = []
        const arr = Array.from({ length: nums.length + 1 }, () => [])
        const map = {}
        for(let i = 0; i < nums.length; i++) {
            map[nums[i]] = (map[nums[i]] || 0) + 1
        }

        for(const key in map) {
            arr[map[key]].push(key)
        }

        let count = 0
        for(let i = arr.length - 1; i > 0; i--) {
            for(const num of arr[i]) {
                if(count === k) {
                    return result
                }
                result.push(num)
                count++
            }
        }

        return result
    }
}
