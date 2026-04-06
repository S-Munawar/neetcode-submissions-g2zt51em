class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const outerArr = [];
        const visited = {}
        for (let i = 0; i<strs.length; i++){
            const innerArr = [];
            if (visited[i]) continue;
            innerArr.push(strs[i]);
            visited[i] = true;
            for(let j=i+1; j<strs.length; j++){
                if (strs[i].length !== strs[j].length || visited[j]) continue;
                let isAnagram = true;
                const count = {};
                for(const ch of strs[i]){
                    const key = ch
                    count[key] = (count[key] || 0) + 1;
                }
                for (const ch of strs[j]){
                    if (!count[ch]){
                        isAnagram = false;
                        break;
                    }
                    count[ch]--;
                }
                if (isAnagram){
                    innerArr.push(strs[j]);
                    visited[j] = true
                }
            }
            outerArr.push(innerArr)
        }
        return outerArr;

    }
}
