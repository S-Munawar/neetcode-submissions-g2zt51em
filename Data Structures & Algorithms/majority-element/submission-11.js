class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        const n = nums.length;
        while(true) {
            let count = 0
            let candidate = nums[Math.floor(Math.random()*n)]
            for(const num of nums) {
                if(num === candidate) {
                    count++
                }
                if(count > Math.floor(n/2)) {
                    return candidate
                }
            }
        }
    }
}
