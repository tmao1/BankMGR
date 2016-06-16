const uuid = require('uuid');

function Account(name) {
  this.name = name;
  this.number = uuid.v1();
  this.balance = 0;
  this.deposits = [];
  this.withdraws = [];
}

// function getBalance(deposits, withdraw) {
//   const totalDeposits = deposits.reduce((prev, curr) => prev + curr);
//   const totalWithDraw = withdraw.reduce((prev, curr) => prev + curr);
//   return this.balalce + totalDeposits - totalWithDraw;
// }
Account.prototype.deposit = function (amt) {
  this.deposits.push(amt);
  this.balance += amt;
  return this.balance;
};

Account.prototype.withdraw = function (amt) {
  if (this.balance < amt) {
    return this.balance;
  };

  this.withdraws.push(amt);
  this.balance = this.balance - amt;
  return this.balance;
};

module.exports = Account;
