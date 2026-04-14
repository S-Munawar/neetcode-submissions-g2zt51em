class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {

        const isAlnum = c => /[a-z0-9]/.test(c.toLowerCase());

        let n = s.length
        let start = 0
        let end = n-1

        while(start < end) {
            while (start < end && !isAlnum(s[start])) start++;
            while (start < end && !isAlnum(s[end]))   end--;
            if (s[start].toLowerCase() !== s[end].toLowerCase()) {
                return false
            }
            start++
            end--
        }
        return true
    }
}
