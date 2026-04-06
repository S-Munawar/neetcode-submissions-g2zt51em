class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {
        let str = ""
        let smallestString = strs.reduce((s, curr) => 
        s.length < curr.length ? s : curr)
        let len = smallestString.length
        for(let i = 0; i < len; i++) {
            let prefix = true
            for(let j = 0; j < strs.length; j++) {
                if(smallestString[i] !== strs[j][i]) {
                    prefix = false
                    break
                }
            }
            if(!prefix) {
                break
            }
            else{
                str += smallestString[i]
            }
        }
        return str
    }
}
