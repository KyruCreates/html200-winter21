// ***** REQUIRED *****
// The user should see a prompt so they can type which action to perform.
// The user will have a list of 4 actions to choose from:
//   - Enter Q to quit (immediately quits the program).
//   - Enter W to withdraw.
//       The user will be prompted again to enter an amount to withdraw. After withdrawing money, they should be able to type another option.
//   - Enter D to deposit.
//       The user will be prompted again to enter an amount to deposit. After depositing money, they should be able to type another option.
//   - Enter B to view balance.
//       The user will see their balance. Afterwards, they should be able to type another option.
// The program will loop asking for input until the user enters Q.
let currentBal = 1000;

function bankAction() {
  let action = prompt('Please choose an action to perform:\nEnter Q to quit\nEnter W to withdraw\nEnter D to deposit\nEnter B to view balance', '');

  while (action != null && action != 'Q') {
    switch (action) {
      case 'q':
      case 'Q':
        // Quits the program
        action = 'Q';
        console.log('Q was pressed, exiting loop');
        break;
      case 'w':
      case 'W':
        // Prompts user to enter an amount to withdraw
        action = prompt('How much do you want to withdraw?');
        // BONUS: The user should not be able to make excessive withdrawals (no negative balances).
        if ((currentBal - action) <= 0) {
          alert('You cannot withdraw $' + action + '\nYour current balance is $' + currentBal);
        } else {
          currentBal -= action;
          alert('You have $' + currentBal + ' remaining');
        }
        console.log('W was pressed, withdraw requested');
        break;
      case 'd':
      case 'D':
        // Promts user to enter an amount to deposit
        action = prompt('How much do you want to deposit?');
        // BONUS: The user should have a deposit cap of $50,000.
        if (action >= 50000) {
          alert('You cannot deposit $' + action + '\nYour maximum deposit is $50,000');
        } else {
          currentBal += action;
          alert('Your current balance is $' + currentBal);
        }
        console.log('D was pressed, deposit requested');
        break;
      case 'b':
      case 'B':
        console.log('B was pressed, check balance requested');
        break;
      default:
        break;
    }
    // If 'Q' is pressed, quit out of the loop
    if (action == 'Q') {
      break;
    // Otherwise, prompt for another action
    } else {
      action = prompt('Please choose an action to perform:\nEnter Q to quit\nEnter W to withdraw\nEnter D to deposit\nEnter B to view balance', '');
    }
  }
}
/* ***** BONUS *****
    - The user should receive a warning to protect against low balances.
    - Create an alert if the user tries to withdraw an amount that would leave them with less than $300 in their account, asking them to confirm if they're sure.
*/
