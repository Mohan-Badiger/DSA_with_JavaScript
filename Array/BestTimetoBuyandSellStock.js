// function BestTimetoBuyandSellStock(prices) {
//     if (!prices || prices.length < 2) {
//         return [-1, -1];
//     }

//     let minPriceIndex = 0;
//     let maxProfit = 0;

//     let buyIndex = -1;
//     let sellIndex = -1;

//     for (let i = 1; i < prices.length; i++) {
//         // If current price is lower, update the prospective buy day
//         if (prices[i] < prices[minPriceIndex]) {
//             minPriceIndex = i;
//         } else {
//             // Check profit if we bought at minPriceIndex and sold at current day i
//             let profit = prices[i] - prices[minPriceIndex];
//             if (profit > maxProfit) {
//                 maxProfit = profit;
//                 buyIndex = minPriceIndex;
//                 sellIndex = i;
//             }
//         }
//     }

//     return { buyIndex, sellIndex, maxProfit };
// }

// console.log(BestTimetoBuyandSellStock([7, 1, 5, 3, 6, 4]));



// function getMinMaxIndices(arr) {
//     let minIndex = 0;
//     let maxIndex = 0;

//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] < arr[minIndex]) {
//             minIndex = i;
//         }
//         if (arr[i] > arr[maxIndex]) {
//             maxIndex = i;
//         }
//     }

//     return [minIndex, maxIndex];
// }

// console.log(getMinMaxIndices([7, 1, 5, 3, 6, 4]));


function buySell(prices) {
    let left = 0; // Buy
    let right = 1; // Sell
    let max_profit = 0;
    while (right < prices.length) {
        if (prices[left] < prices[right]) {
            let profit = prices[right] - prices[left];
            max_profit = Math.max(max_profit, profit);
        } else {
            left = right;
        }
        right++;
    }
    return max_profit;
}

console.log(buySell([7, 1, 5, 3, 6, 4]));
