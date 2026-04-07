class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        let n = nums.length
       while(true) {
        let random = nums[Math.floor(Math.random() * n)];
        let count = 0
        for(const num of nums) {
            if(random === num) {
                count++
            }
        }
        if(count > Math.floor(n/2)) {
            return random
        }
       } 
    }
}
