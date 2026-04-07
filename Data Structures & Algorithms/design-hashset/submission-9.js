class ListNode {
    constructor(key = -1, next = null) {
        this.key = key
        this.next = next
    }
}

class MyHashSet {
    constructor() {
        this.set = Array.from({length: 10000}, () => new ListNode())
    }

    hash(key) {
        return key % this.set.length;
    }
    /**
     * @param {number} key
     * @return {void}
     */
    add(key) {
        const index = this.hash(key)
        let curr = this.set[index]
        while(curr.next !== null) {
            if(curr.next.key === key) {
                return
            }
            curr = curr.next;
        }
        curr.next = new ListNode(key)
    }

    /**
     * @param {number} key
     * @return {void}
     */
    remove(key) {
        const index = this.hash(key)
        let curr = this.set[index]
        while(curr.next !== null) {
            if(curr.next.key === key) {
                curr.next = curr.next.next
                return
            }
            curr = curr.next;
        }
    }

    /**
     * @param {number} key
     * @return {boolean}
     */
    contains(key) {
        const index = this.hash(key)
        let curr = this.set[index]
        while(curr.next !== null) {
            if(curr.next.key === key) {
                return true
            }
            curr = curr.next;
        }
        return false
    }
}

/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */
