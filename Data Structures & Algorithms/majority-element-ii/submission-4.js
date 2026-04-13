class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    majorityElement(nums) {

        let set = new Set()
        nums.sort((a, b) => a - b)

        let index = 0
        let curr = 0
        let count = 0
        
        while(index < nums.length) {
            
            if(nums[curr] === nums[index]) {
                count++
                index++
                if(count > Math.floor(nums.length/3)) {
                    set.add(nums[curr])
                }
            } else {
                curr = index
                count = 0
            }

        }

        return Array.from(set)

    }

}