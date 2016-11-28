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
  var coinPurse = {
    quarter: 0,
    dimes: 0,
    nickels: 0,
    pennies: 0
  };

  coinPurse.quarters = 0;
  coinPurse.dimes = 0;
  coinPurse.nickels = 0;
  coinPurse.pennies = 0;

  while (amount > 0) {

    // Check Quarters
    if (amount >= .25) {
      while (amount >= .25) {
        amount -= .25;
        coinPurse.quarters++;
      } 
    }

    // Check Dimes
    if (amount < .25 && amount >= .10) {
      while(amount >= .10) {
        amount -= .10;
        coinPurse.dimes++;
      }

    }


    // Check Nickels
    if (amount < .10 && amount >= .05) {
      while (amount >= .05) {
        amount -= .05;
        coinPurse.nickels;

      }
    }

    // Check Pennies
    if (amount < .05) {
      while (amount > 0) {
        amount -= .01;
        coinPurse.pennies++;
      }
    }

  }

  return coinPurse;
}

var coins = coinCounter(.25)
console.log(coins);