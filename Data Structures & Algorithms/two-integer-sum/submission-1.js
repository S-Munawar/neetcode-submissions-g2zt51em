class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let hash = {}
        for (let i=0; i<nums.length; i++){
            const val = target - nums[i];
            if (val in hash) return [hash[val], i];
            else {
                hash[nums[i]] = i;
            } 
        }
}
}