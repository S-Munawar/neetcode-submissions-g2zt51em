class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    majorityElement(nums) {

        let res = []
        nums.sort((a, b) => a - b)

        
        let index = 0
        let curr = 0
        
        while(curr < nums.length) {
            let count = 0

            while(nums[curr] === nums[index] && index < nums.length) {
                count++
                index++
            }
            if(count > Math.floor(nums.length/3)) {
                res.push(nums[curr])
            }
            curr = index
        }

        return res

    }
}