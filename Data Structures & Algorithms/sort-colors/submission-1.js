class Solution {
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    sortColors(nums) {
        const arr = [0, 0, 0]

        for(const num of nums) {
            arr[num]++
        }

        let j = 0
        for(let color = 0; color < 3; color++) {
            while(arr[color] > 0) {
                nums[j] = color
                arr[color]--
                j++
            }
        }

        return nums
    }
}
