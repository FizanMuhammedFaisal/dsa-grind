/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    const row=new Map()
    const col=new Map()
    const sub=new Map()


    for(let i=0;i<board.length;i++){
        for(let j=0;j<board.length;j++){
            if(board[i][j]==='.')continue
        const subkey=`${Math.floor(i/3)},${Math.floor(j/3)}`
          if(!row.get(i)){
             row.set(i,new Set())
          }
          if(!col.get(j)){
             col.set(j,new Set())
          }
         
          if(!sub.get(subkey)){
            sub.set(subkey,new Set())
          }
          if(row.get(i).has(board[i][j])){
            return false
          }
           if(col.get(j).has(board[i][j])){
            return false
          }
           if(sub.get(subkey).has(board[i][j])){
            return false
          }
          col.get(j).add(board[i][j])
          row.get(i).add(board[i][j])
          sub.get(subkey).add(board[i][j])
        }
    }
    return true
};