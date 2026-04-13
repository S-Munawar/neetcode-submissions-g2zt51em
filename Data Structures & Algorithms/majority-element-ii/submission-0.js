class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    majorityElement(nums) {

        let res = []
        let map = new Map() 
 
        for(const num of nums) {
            map.set(num, (map.get(num) || 0) + 1)
        }

        for(const [key, value] of map) {
            if(value > Math.floor(nums.length/3)) {
                res.push(key)
            }
        }

        return res

    }
}
