class MyHashSet {
    constructor() {
        this.set = Array.from({length: 100000}).fill(false)
    }

    /**
     * @param {number} key
     * @return {void}
     */
    add(key) {
        this.set[key] = true
    }

    /**
     * @param {number} key
     * @return {void}
     */
    remove(key) {
        this.set[key] = false
    }

    /**
     * @param {number} key
     * @return {boolean}
     */
    contains(key) {
        return this.set[key]
    }
}

/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */
