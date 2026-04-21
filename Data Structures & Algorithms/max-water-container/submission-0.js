class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {

        let max = 0
        const n = heights.length
        let l = 0
        let r = n - 1
        while(l < r) {
            let area = (r - l) * Math.min(heights[l], heights[r])
            if(area > max) {
                max = area
            }
            if(heights[l] >= heights[r]) {
                r--
            }
            else{
                l++
            }
        }
        return max
    }
}
