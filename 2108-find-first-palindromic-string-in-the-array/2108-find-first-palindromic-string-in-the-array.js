/**
 * @param {string[]} words
 * @return {string}
 */
var firstPalindrome = function(words) {
    
    for(let i=0;i<words.length;i++){
        const res=isPalindrome(words[i])
        console.log(res)
        if(res){
            return words[i]
        }
    }
    return ''
    function isPalindrome(word){
        let f=0
        let l=word.length-1
        while(f<=l){
            if(word[f]!==word[l]){
                return false
            }
            f++
            l--
        }
        return true
    }
};