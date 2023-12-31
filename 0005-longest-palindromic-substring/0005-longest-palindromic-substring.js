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

/*var longestPalindrome = function(s) {
    if(s.length===1) return s;
    
    const getEven = (arr)=>{
        const index=[0,0];
        let max=1;
        
        for(let i=0; i<arr.length; i++){
            let l=i;
            let r=i+1;
            while(l>=0 && r<arr.length){
                if(arr[l]!==arr[r]) break;
                
                if(max <= r-l+1){
                    max=r-l+1;
                    index[0]=l;
                    index[1]=r;
                }
                l--;
                r++;
            }    
        }
        
        return [index,max];
    }*/