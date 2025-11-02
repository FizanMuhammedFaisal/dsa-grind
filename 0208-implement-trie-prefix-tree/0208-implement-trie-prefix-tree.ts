class Trie {
     root:TrieNode
    constructor() {
        this.root=new TrieNode()
    }

    insert(word: string): void {
        let node=this.root
        for(let l of word){
            if(!node.children[l]){
                node.children[l]=new TrieNode()
            }
            node=node.children[l]
        }
        node.isEnd=true
        console.log(this.root)
    }

    search(word: string): boolean {
        let node=this.root
        for(let l of word){
            if(!node.children[l]){
                return false
            }
            node=node.children[l]
        }
        return node.isEnd
    }

    startsWith(prefix: string): boolean {
         let node=this.root
        for(let l of prefix){
            if(!node.children[l]){
                return false
            }
            node=node.children[l]
        }
        return !!node
    }
}

class TrieNode{
    children:Record<string,TrieNode>
    isEnd:boolean
    constructor(){
        this.children={}
        this.isEnd=false
    }
}
/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */