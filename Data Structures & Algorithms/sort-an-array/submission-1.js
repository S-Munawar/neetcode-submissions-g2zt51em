class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    sortArray(nums) {
        
        if(nums.length < 2) {
            return nums
        }

        const mid = Math.floor(nums.length / 2)
        const leftArr = nums.slice(0, mid)
        const rightArr = nums.slice(mid)

        return this.merge(this.sortArray(leftArr), this.sortArray(rightArr))
    }

    merge(nums1, nums2) {

        const result = []
        while(nums1.length && nums2.length) {

            if(nums1[0] <= nums2[0]) {
                result.push(nums1[0])
                nums1.shift()
            }
            else{
                result.push(nums2[0])
                nums2.shift()
            }

        }

        return [...result, ...nums1, ...nums2]

    }
}
