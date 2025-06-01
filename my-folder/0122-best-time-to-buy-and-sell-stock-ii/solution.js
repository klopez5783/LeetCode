/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {

    let buy = 0;
    let MaxProfit = 0
    let sell = 1;
    while(sell < prices.length){

        let tempProfit = prices[sell] - prices[buy] ;
        if(tempProfit > 0){
            MaxProfit = MaxProfit + tempProfit
        }
        // if(prices[buy] < prices[sell]){
        //     MaxProfit = Math.max(MaxProfit, prices[sell] - prices[buy]);
        // }else{
        //     buy = sell
        // }
        sell++
        buy++
        
    }

    return MaxProfit;
    
};
