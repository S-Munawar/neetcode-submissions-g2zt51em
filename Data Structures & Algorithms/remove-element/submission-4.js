class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    removeElement(nums, val) {
        let i = 0
        let k = 0
        let len = nums.length
        while(i < len) {
            if(nums[0] === val) {
                nums.shift()  
            }
            else{
                nums.push(nums[0])
                nums.shift()
                k++
            }
            i++
        }
        return k
    }
}
