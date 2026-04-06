class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let arr = []
        for(let i = 0; i < nums.length; i++) {
            arr.push([nums[i], i])
        }
        arr.sort((a, b) => a[0] - b[0])

        let i = 0
        let j = arr.length - 1
        while(i < j) {
            let sum = arr[j][0] + arr[i][0]
            if(sum === target) {
                return [Math.min([arr[i][1]], arr[j][1]), Math.max([arr[i][1]], arr[j][1])]
            }
            else if(sum < target) {
                i++
            }
            else {
                j--
            }
        }
        return [];
    }
}
