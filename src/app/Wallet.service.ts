export class WalletService{
  balance:[{Sum:0}] =[{Sum:0}];

  addSum( balance:[{Sum:0}] =[{Sum:0}]) {
    this.balance=balance;
  }
  getSum(){
    return this.balance[0].Sum;
  }
}
