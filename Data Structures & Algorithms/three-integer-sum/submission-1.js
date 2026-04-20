class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {

        let res = []
        let n = nums.length

        nums.sort((a, b) => a - b)
        for(let i = 0; i < n - 2; i++) {

            if(nums[i] === nums[i - 1]) continue
            let l = i + 1
            let r = n - 1

            while(l < r) {

                let sum = nums[i] + nums[l] + nums[r]
                if(sum === 0) {
                    res.push([nums[i], nums[l], nums[r]])
                    l++
                    r--
                    while(nums[l] === nums[l - 1]) l++
                    while(nums[r] === nums[r + 1]) r++
                }
                else if(sum > 0) {
                    r--
                }
                else{
                    l++
                }
            }
        }
        return res
    }
}
