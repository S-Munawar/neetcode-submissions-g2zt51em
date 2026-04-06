class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        const threshold = nums.length/2
        for (const i of nums){
            let count = 0;
            for (const j of nums){
                if (i==j){
                    count++
                }
            }
            if (threshold < count){
                return i;
            }
        }
    }
}
