/* eslint-disable prefer-arrow-callback, func-names,
space-before-function-paren, no-traiing-spaces */
const Account = require('../lib/account');

function Bank(name) {
  this.name = name;
  this.accounts = [];
}

Bank.prototype.addAccount = function (account) {
  this.accounts.push(account);
};

Bank.prototype.getValue = function () {
  return this.accounts.reduce((total, account) => total + account.balance, 0);
};

module.exports = Bank;
