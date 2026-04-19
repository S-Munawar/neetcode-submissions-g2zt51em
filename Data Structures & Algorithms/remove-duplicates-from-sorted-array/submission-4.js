class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    removeDuplicates(nums) {

        let l = 1
        let r = 1
        let n = nums.length

        while(r < n) {

            if(nums[r - 1] !== nums[r]) {
                nums[l] = nums[r]
                l++
            }
            r++
        }
        return l   
    }
}
