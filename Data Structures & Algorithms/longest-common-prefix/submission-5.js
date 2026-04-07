class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {
        let prefix = strs[0]
        while(prefix.length > 0) {
            let allMatch = true
            for(let i = 1; i < strs.length; i++) {
                let trim = strs[i].slice(0, prefix.length)
                if(prefix !== trim) {
                    prefix = prefix.slice(0, prefix.length - 1)
                    allMatch = false
                    break
                }
            }
            if(allMatch === true) {
                return prefix
            }
        }
        return prefix
    }
}
