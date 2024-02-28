/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    let sortedIntervals = intervals.sort(function(a,b){ return a[0]-b[0] })
    let res=[]
    let i=0;
    while(i<sortedIntervals.length){
        let l = res.length
        if(l>0 && res[l-1][1] >= sortedIntervals[i][0]){
            res[l-1][1] = Math.max(res[l-1][1], sortedIntervals[i][1])
        }else{
            res.push(sortedIntervals[i])
        }
        i++
    }
    return res
};