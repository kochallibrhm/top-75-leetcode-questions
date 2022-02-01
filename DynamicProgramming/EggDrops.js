/**
 * @param {number} n
 * @return {number}
 */
var twoEggDrop = function(n) {
    const eggs = 2
    let matrix = Array.from(Array(eggs + 1), () => Array(n + 1).fill(0));
    for(let i = 1; i <= eggs; i++){
        for(let j = 1; j <= n; j++){
            if(i == 1){
                matrix[i][j] = j;
                continue;
            }
            if(j == 1){
                matrix[i][j] = 1;
                continue;
            }
            matrix[i][j] = Number.MAX_SAFE_INTEGER;
            for(let k = 1; k <= j; k++){
                matrix[i][j] = Math.min(matrix[i][j],1+Math.max(matrix[k-1][j-1], matrix[i-k][i]));
            }
        
           
        }
    }
    console.log(matrix);
    return matrix[eggs][n];
};



/*
var twoEggDrop = function(n) {
    const eggs = 2
    let matrix = Array.from(Array(eggs + 1), () => Array(n + 1).fill(0));
    for(let i = 1; i <= eggs; i++){
 
        for(let j = 1; j <= n; j++){
           console.log(matrix);
            if(i == 1){
                matrix[i][j] = j;
                continue;
            }
            if(j == 1){
                matrix[i][j] = 1;
                continue;
            }
            matrix[i][j] = Number.MAX_SAFE_INTEGER;
            for(let k = 1; k <= j; k++){
            		console.log(matrix[i-k][i]);
                matrix[i][j] = Math.min(matrix[i][j], 1+Math.max(matrix[k-1][j-1], matrix[i-k][i]));
            }
        }
    }
    
    console.log(matrix[eggs][n]);
    return matrix[eggs][n];
};

twoEggDrop(3);
*/
