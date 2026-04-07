class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {
        strs.sort()
        let i = 0
        let prefix = strs[0]
        let last = strs[strs.length - 1]
        while(i < Math.min(prefix.length, last.length)) {
            if(prefix[i] !== last[i]) {
                prefix = prefix.slice(0, i)
                break
            }
            i++
        }
        return prefix
    }
}
