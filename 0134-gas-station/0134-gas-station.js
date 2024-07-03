/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {    
    let balance = 0;
    let start = null;
    let sum = 0;
    
    for (let i = 0; i < gas.length; i++) {
        balance = gas[i] + balance - cost[i];
        sum += gas[i] - cost[i];
        
        if (balance < 0) {
            balance = 0;
            start = i + 1;
        }
    }
    
    
    if (sum < 0) return -1;
    return start;
};