class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    firstMissingPositive(nums) {

        let set = new Set(nums)
        let res = 1

        while(true) {
            if(set.has(res)) {
                res++
            }
            else {
                return res
            }
        }
        

    }
}
