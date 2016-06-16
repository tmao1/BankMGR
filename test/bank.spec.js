/* eslint-disable prefer-arrow-callback, func-names,
space-before-function-paren, no-traiing-spaces */

const expect = require('chai').expect;
const Account = require('../lib/account');
const Bank = require('../lib/bank');

describe('Bank', function() {
  describe('#bank', function() {
    it('should create a new bank', function() {
      const b1 = new Bank('Tony & John Bank');
      expect(b1).to.be.instanceof(Bank);
      expect(b1.name).to.equal('Tony & John Bank');
    });
  });

  describe('#addAccounts', function() {
    it('should add an account to the bank', function() {
      const b2 = new Bank('Tony & John Bank');
      const a1 = new Account('a1');
      b2.addAccount(a1);
      expect(b2.accounts[0].name).to.equal('a1');
    });
  });

  describe('#getValue', function() {
    it('should get the value of the bank', function() {
      const b3 = new Bank('Tony & John Bank');
      const a1 = new Account('a1');
      const a2 = new Account('a2');
      b3.addAccount(a1);
      b3.addAccount(a2);
      a1.deposit(100);
      a2.deposit(200);
      expect(b3.getValue()).to.equal(300);
    });
  });

});
