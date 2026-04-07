class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {
        let prefix = strs[0]
        for(let i = 1; i < strs.length; i++) {
           let j = 0
           while(j < prefix.length || j < strs[i].length) {
                if(prefix[j] !== strs[i][j]) {
                    prefix = prefix.slice(0, j)
                    break
                }
                j++
           }
        }
        return prefix
    }
}
