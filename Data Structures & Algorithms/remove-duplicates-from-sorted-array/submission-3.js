class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    removeDuplicates(nums) {

        let l = 1
        let r = 1
        let n = nums.length
        let unique = nums[0]

        while(r < n) {

            if(unique !== nums[r]) {
                nums[l] = nums[r]
                unique = nums[l]
                l++
            }
            r++

        }
        return l   
    }
}
