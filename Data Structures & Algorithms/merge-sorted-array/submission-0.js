class Solution {
    /**
     * @param {number[]} nums1
     * @param {number} m
     * @param {number[]} nums2
     * @param {number} n
     * @return {void} Do not return anything, modify nums1 in-place instead.
     */
    merge(nums1, m, nums2, n) {

        let a = m - 1
        let b = n - 1
        let c = nums1.length - 1

        while(b >= 0) {

            if(nums1[a] > nums2[b]) {
                nums1[c] = nums1[a--]
            }
            else{
                nums1[c] = nums2[b--]
            }
            c--
        }
    }
}
