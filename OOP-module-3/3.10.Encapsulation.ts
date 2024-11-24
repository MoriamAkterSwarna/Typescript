{
  // ? Encapsulation

  class BankAccount {
    public readonly id: number;
    public name: string;
    // private _balance: number;
    protected _balance: number;

    constructor(id: number, name: string, balance: number) {
      this.id = id;
      this.name = name;
      this._balance = balance;
    }

    public addDeposit(amount: number) {
      this._balance = this._balance + amount;
    }

    public getBalance() {
      return this._balance;
    }
  }

  class StudentAccount extends BankAccount {
    test() {
      // this._balance  // when the property is set as private we can not access it in extends thats why we need to set is as protected
      this._balance;
    }
  }

  const goribManusherAcc = new BankAccount(111, "Mr, gorib", 20);
  // goribManusherAcc.id = 222;   //Error: Cannot assign to 'id' because it is a read-only property.
  //   goribManusherAcc.balance = 0; // Error: Property 'balance' is private and only accessible within class 'BankAccount'.

  goribManusherAcc.addDeposit(20);
  goribManusherAcc.getBalance();
}
