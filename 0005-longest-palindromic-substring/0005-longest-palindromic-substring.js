/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    if(s.length===1) return s;
    
    let max=1;
    let index=[0,0];
    
    const dp=[...Array(s.length)].map(r=>Array(s.length).fill(0));
    
    const getAnswer=(i,j)=>{
        max=j-i+1;
        index[0]=i;
        index[1]=j;
    }
    
    for(let i=s.length-1; i>=0; i--){
        for(let j=s.length-1; j>=i; j--){
            if(i===j){
                dp[i][j]=1;
                continue;
            }
            if(s[i]!==s[j]) continue;
            
            if(j-i===1){
                dp[i][j]=1;
                if(max<j-i+1) getAnswer(i,j);
            }
            
            if(!dp[i+1][j-1]) continue;
            dp[i][j]=1;
            
            if(max<j-i+1) getAnswer(i,j);
        }
    }
    
    return s.substring(index[0],index[1]+1);
};