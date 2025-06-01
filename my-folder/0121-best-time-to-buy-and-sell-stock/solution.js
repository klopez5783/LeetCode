/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {

    let buy = 0;
    let MaxProfit = 0
    let sell = 1;
    while(sell < prices.length){

        if(prices[buy] < prices[sell]){
            MaxProfit = Math.max(MaxProfit, prices[sell] - prices[buy]);
        }else{
            buy = sell
        }
        sell++
        
    }

    // console.log(MaxProfit);

    return MaxProfit;
    
};
