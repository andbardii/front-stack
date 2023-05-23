// CLASSE COSTRUTTORE
class BankUser {

    protected balance: number;

    constructor(balanceInit: number = 0) {
        this.balance = balanceInit;
    };

    oneDeposit(ammount:number): void {
        this.balance += ammount;
    };

    oneWithdraw(ammount:number): void {
        if (this.balance >= ammount) {
            this.balance -= ammount;
        } else {
            console.log('Fondi insufficienti per il prelievo');
        }
    };

    getBalance(): number {
        return this.balance;
    }
}

// CLASSE SON
class sonUser extends BankUser {
    constructor(balanceInit:number){
        super()
    }
};

// CLASSE MOTHER
class motherUser extends BankUser {
    public interest: number;

    constructor(balanceInit:number , interest: number) {
        super();
        this.interest = interest;
      }
    
      addInterest(): void {
        const interestToAdd = this.balance * this.interest;
        this.oneDeposit(interestToAdd)
      }
};

// UTILIZZO
const sonAccount = new sonUser(0);
sonAccount.oneDeposit(500);
sonAccount.oneWithdraw(300);
console.log('Il saldo di SonAccount è: ', sonAccount.getBalance(),'$');

const motherAccount = new motherUser(0, 0.10);
motherAccount.oneDeposit(1000);
motherAccount.oneWithdraw(200);
motherAccount.addInterest()
console.log('Il saldo di MotherAccount è: ', motherAccount.getBalance(), '$');
