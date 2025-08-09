
// EXERCISE 14
// The balance is supposed to equal the difference of all deposits and all withdrawals.
// Check every bank account balance and return the array of bank accounts with a wrong balance
// Array example: bankAccounts in /data/data.js
// getClientsWithWrongBalance(bankAccounts) => [{ name: 'Name1', balance: 32, ... }, { name: 'Name2', balance: 3523, ... }]

export function getClientsWithWrongBalance(array) {
  // Your code goes here...
  let accts = [];

  for(let i = 0; i < array.length; i ++){
    let correctBalance = 0;
    let wd = 0;
    let dep = 0;

    //finding total withdrawals
    if(array[i].withdrawals == undefined){
      wd = 0;
    }
    else{
      for(let j = 0; j < array[i].withdrawals.length; j ++){
          wd += array[i].withdrawals[j];
      }
    }

    //finding total deposits
    if(array[i].deposits == undefined){
      dep = 0;
    }
    else{
      for(let j = 0; j < array[i].deposits.length; j ++){
          dep += array[i].deposits[j];
      }
    }

    //pushing accounts with incorrect balance
    if(array[i].balance != dep - wd){
      accts.push(array[i]);
    }
  }

  return accts;
}



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-14"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
