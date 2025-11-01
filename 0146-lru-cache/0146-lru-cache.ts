class LRUCache {
    private size: number;
    private map: Map<number, Node>;
    private head: Node;
    private tail: Node;
    private capacity: number

    constructor(capacity: number) {
        this.map = new Map()
        this.size = 0
        this.capacity = capacity

        this.head = new Node(0, 0);
        this.tail = new Node(0, 0);

        this.head.next = this.tail;
        this.tail.prev = this.head;
    }

    get(key: number): number {

        const node = this.map.get(key)
        if (node) {
            this.moveToHead(node)
            return node.value
        } else {
            return -1
        }
    }

    put(key: number, value: number): void {
        // place the elemnt in map 
        // if capacity is full eveict teh last one
        const mapElem = this.map.get(key)
        if (mapElem) {
            if (mapElem) {
               mapElem.value=value
               this.moveToHead(mapElem)
            }
        } else {
            if (this.size === this.capacity) {
                const res = this.removeTail()
                this.map.delete(res.key)
                this.size--
            }

            const node = new Node(key, value)
            this.addNode(node)
            this.map.set(key, node)
           
            this.size++
        }

    }

    private addNode(node: Node) {
        node.next = this.head.next
        node.prev = this.head
        this.head.next.prev = node
        this.head.next = node
    }
    private removeNode(node: Node) {
        const next = node.next
        const prev = node.prev
        prev.next = next
        next.prev = prev
    }
    private moveToHead(node: Node) {
        this.removeNode(node)
        this.addNode(node)
    }
    private removeTail() {
        const res = this.tail.prev
        this.removeNode(res)
        return res
    }
}

class Node {
    key: number; // so that when we remove least used we have key to delete it from hashtable
    value: number;
    prev: Node | null;
    next: Node | null;

    constructor(key: number, value: number) {
        this.key = key;
        this.value = value;
        this.prev = null;
        this.next = null;
    }

}
/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */