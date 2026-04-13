class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {

        if (!nums.length) return 0

        const set = new Set(nums)

        
        let max = 1
        for(const num of set) {
            if (set.has(num - 1)) continue  // only start from sequence beginnings
            let count = 1 
            while(set.has(num + count)) {
                count++
            }
            max = Math.max(max, count)
            
        }

        return max
        
 
        
    }
}
