class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[][]}
     */
    fourSum(nums, target) {

        let res = []
        let n = nums.length

        nums.sort((a, b) => a - b)

        for(let i = 0; i < n - 3; i++) {

            if(i > 0 && nums[i] === nums[i - 1]) continue

            for(let j = i + 1; j < n - 2; j++) {

                if(j - 1 !== i && nums[j] === nums[j - 1]) continue

                let l = j + 1
                let r = n - 1

                while(l < r) {

                    let sum = nums[i] + nums[j] + nums[l] + nums[r]
                    if(sum === target) {
                        res.push([nums[i], nums[j], nums[l], nums[r]])
                        l++
                        r--
                        while(nums[l] === nums[l - 1]) l++
                        while(nums[r] === nums[r + 1]) r++
                    }
                    else if(sum > target) {
                        r--
                    }
                    else{
                        l++
                    }
                }

            }

        }
        return res
    }
}
