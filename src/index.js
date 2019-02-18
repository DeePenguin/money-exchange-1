// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    const coinsValue = new Map([['H', 50], ['Q', 25], ['D', 10], ['N', 5], ['P', 1]]);
    const amountForExchange = {};
    if(currency <= 0) {
        return amountForExchange;
    } else if(currency > 10000) {
        amountForExchange.error = "You are rich, my friend! We don't have so much coins for exchange";
        return amountForExchange;
    }
    const calculateAmount = (currency, coinsValue) => {
        for (let [coin, value] of coinsValue){
            const division = Math.trunc(currency / value);
            const remainder = currency % value; 
            if(division > 0) {
                amountForExchange[coin] = division;
                currency = remainder;
            } else if(division > 0 && remainder === 0){
                break;
            }
        }
        return amountForExchange;
    };
    return calculateAmount(currency,coinsValue);
}
