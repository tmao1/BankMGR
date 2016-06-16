
function getBalance(deposits, withdraw){
  let totalDeposits = deposits.reduce((prev, curr) => prev+curr);
  let totalWithDraw = withdraw.reduce((prev,curr) => prev+curr);
  return this.balalce + totalDeposits - totalWithDraw;
}

module.exports = getBalance;
