class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) return false
        const length = s.length
        let str1 = new Map()
        let str2 = new Map()
        for(let i = 0; i < length; i++) {
            str1[s[i]] = (str1[s[i]] | 0) + 1
            str2[t[i]] = (str2[t[i]] | 0) + 1
        }
        for(const ch in str1) {
            if (str1[ch] !== str2[ch]) {
                return false
            }
        }
        return true
    }
}
