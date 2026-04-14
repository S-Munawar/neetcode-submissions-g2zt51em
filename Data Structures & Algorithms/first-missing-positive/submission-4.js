class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    firstMissingPositive(nums) {

        let n = nums.length

        for(let i = 0; i < n; i++) {
            if (nums[i] < 0) {
                nums[i] = 0;
            }
        }

        for(let i = 0; i < n; i++) {
            const val = Math.abs(nums[i])
            if(val > 0 && val <= n) {
                let index = val - 1
                if(nums[index] > 0) {
                    nums[index] = -nums[index]
                }
                else if(nums[index] === 0) {
                    nums[index] = -1
                }
                
            }
        }

        for(let i = 0; i < n; i++) {
            if(nums[i] >= 0) {
                return i + 1
            }
        }

        return n + 1

    }
}
