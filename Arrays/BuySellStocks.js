// Input: prices = [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
// Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.

const maxProfit = function(prices) {
    let minPrice = Infinity; 
    let maxProfit = 0;

    for(let i =0; i<prices.length; i++) {
         if (prices[i] < minPrice) {
            minPrice = prices[i];
        }
        
        // Calculate profit if we sell on the current day
        let profit = prices[i] - minPrice;
        
        // Update the maximum profit
        if (profit > maxProfit) {
            maxProfit = profit;
        }
    }
     return maxProfit;
};

console.log(maxProfit([7,1,5,3,6,4]));

