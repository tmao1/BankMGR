/* eslint-disable prefer-arrow-callback, func-names,
space-before-function-paren, no-traiing-spaces */

const expect = require('chai').expect;
const Account = require('../lib/account');

describe('Account', function() {
  describe('#account', function() {
    it('should create a new account', function() {
      const newAccount1 = new Account('Tony');
      expect(newAccount1).to.be.instanceof(Account);
      expect(newAccount1.number).to.be.length(36);
      expect(newAccount1.balance).to.equal(0);
      expect(newAccount1.name).to.equal('Tony');
    });
  });

  describe('#deposit', function() {
    it('should return balance after deposit', function() {
      const newAccount2 = new Account('Tony');
      expect(newAccount2.deposit(400)).to.equal(400);
      expect(newAccount2.deposit(200)).to.equal(600);
    });
  });

  describe('#withdraw', function(){
    it('should return balance after withdraw', function() {
      let newAccount3 = new Account('Tony');
      newAccount3.deposit(400);
      expect(newAccount3.withdraw(300)).to.equal(100);
      expect(newAccount3.balance).to.equal(100);
      expect(newAccount3.withdraw(500)).to.equal(100);
    });
  });
});
