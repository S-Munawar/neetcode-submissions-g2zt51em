class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {

        if(s.length !== t.length) return false;
        let sHash = {};
        for (const ch of s){
            sHash[ch] = (sHash[ch] || 0) + 1
        }
        for (const ch of t){
            if (!sHash[ch]) return false
            sHash[ch]--;
        }
        return true;
    }
}