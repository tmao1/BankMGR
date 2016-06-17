const uuid = require('uuid');

function Account(name) {
  this.name = name;
  this.number = uuid.v1();
  this.balance = 0;
  this.deposits = [];
  this.withdraws = [];
}

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
