class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let seen = new Set();
        for (const item of nums){
            if (seen.has(item)) return true;
            else seen.add(item);
        }
        return false;
    }
}
