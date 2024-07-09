/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = function(prices) {
    let profit = 0;
    let min = prices[0]
    
    for (let i=1; i<prices.length; i++) {
        min = Math.min(min, prices[i-1])    // 구매 금액은 항상 판매 금액보다 앞인덱스에 있어야 하므로 i-1를 해준다.
        profit = Math.max(prices[i]-min, profit)
    }
    
    return profit
};