{
  // ? Getter & Setter

  class BankAccount {
    public readonly id: number;
    public name: string;
    protected _balance: number;

    constructor(id: number, name: string, balance: number) {
      this.id = id;
      this.name = name;
      this._balance = balance;
    }

    // public addDeposit(amount: number) {
    //   this._balance = this._balance + amount;
    // }

    // public getBalance() {
    //   return this._balance;
    // }

    // * Setter
    set deposit(amount: number) {
      this._balance = this.Balance + amount;
    }

    // * Getter

    get Balance() {
      return this._balance;
    }
  }

  const goribManusherAcc = new BankAccount(111, "Mr, gorib", 20);

  //   goribManusherAcc.addDeposit(20);
  //   goribManusherAcc.getBalance();  // function call korte hocche

  goribManusherAcc.deposit = 100;
  const myBalance = goribManusherAcc.Balance; // property er moto kore access korte parchi
  console.log(myBalance);
}
