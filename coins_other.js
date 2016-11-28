/*
Write a program that will convert a dollar amount to the 
number of coins that make up the amount. Use the common 
American coins of quarters, dimes, nickels, and pennies.
*/

/*
  Input: 0.67
  Output:
  {
    quarters: 2,
    dimes: 1,
    nickels: 1,
    pennies: 2
  }

*/

function coinCounter (amount) {
  // Initialize a JavaScript object to hold the coins
  var coinPurse = {};

  coinPurse.quarters = 0;
  coinPurse.dimes = 0;
  coinPurse.nickels = 0;
  coinPurse.pennies = 0;

  console.log(amount)

  if(amount >= .25) {
    coinPurse.quarters = parseInt(amount / .25);
    amount-=(coinPurse.quarters*.25);
  }

  console.log(amount)



  // if(amount < .25 && amount >= .10) {

  // }


  return coinPurse;
}

var coins = coinCounter(1.65)
console.log(coins);