class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {

        let n = s.length
        let start = 0
        let end = n-1

        while(start < end) {
            while (start < end && !this.isAlnum(s[start])) start++;
            while (start < end && !this.isAlnum(s[end]))   end--;
            if (s[start].toLowerCase() !== s[end].toLowerCase()) {
                return false
            }
            start++
            end--
        }
        return true
    }

    isAlnum(c) {
        return (
            (c >= 'A' && c <= 'Z') ||
            (c >= 'a' && c <= 'z') ||
            (c >= '0' && c <= '9')
        );
    }
}
