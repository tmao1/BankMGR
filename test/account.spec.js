const expect = require('chai').expect;
const Account = require('../lib/account');

const balance = require('../lib/accountBalance');

describe('Account',function(){
  describe('#account',function(){
    it('should create a new account',function(){
      let newAccount1 = new Account('Tony', 100);
      expect(newAccount1).to.be.instanceof(Account);
      expect(newAccount1.number).to.be.length(36);
      expect(newAccount1.balance).to.equal(100);
      expect(newAccount1.name).to.equal("Tony");
      expect(newAccount1.deposits).to.be.length(0);
      expect(newAccount1.withdraw).to.be.length(0);
    });

    it('should get the balance of the account',function(){

      let newAccount = new Account('Tony', 1000);
      const deposits = [50, 100, 500, 1000];
      const withdraw = [40, 90, 100];

      let balance = getBalance(deposits, withdraw);
      expect(balance).to.equal(2650);
    });

  });
});
