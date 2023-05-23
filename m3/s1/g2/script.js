var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// CLASSE COSTRUTTORE
var BankUser = /** @class */ (function () {
    function BankUser(balanceInit) {
        if (balanceInit === void 0) { balanceInit = 0; }
        this.balance = balanceInit;
    }
    ;
    BankUser.prototype.oneDeposit = function (ammount) {
        this.balance += ammount;
    };
    ;
    BankUser.prototype.oneWithdraw = function (ammount) {
        if (this.balance >= ammount) {
            this.balance -= ammount;
        }
        else {
            console.log('Fondi insufficienti per il prelievo');
        }
    };
    ;
    BankUser.prototype.getBalance = function () {
        return this.balance;
    };
    return BankUser;
}());
// CLASSE SON
var sonUser = /** @class */ (function (_super) {
    __extends(sonUser, _super);
    function sonUser(balanceInit) {
        return _super.call(this) || this;
    }
    return sonUser;
}(BankUser));
;
// CLASSE MOTHER
var motherUser = /** @class */ (function (_super) {
    __extends(motherUser, _super);
    function motherUser(balanceInit, interest) {
        var _this = _super.call(this) || this;
        _this.interest = interest;
        return _this;
    }
    motherUser.prototype.addInterest = function () {
        var interestToAdd = this.balance * this.interest;
        this.oneDeposit(interestToAdd);
    };
    return motherUser;
}(BankUser));
;
// UTILIZZO
var sonAccount = new sonUser(0);
sonAccount.oneDeposit(500);
sonAccount.oneWithdraw(600);
console.log('Il saldo di SonAccount è: ', sonAccount.getBalance(), '$');
var motherAccount = new motherUser(0, 0.10);
motherAccount.oneDeposit(1000);
motherAccount.oneWithdraw(200);
motherAccount.addInterest();
console.log('Il saldo di MotherAccount è: ', motherAccount.getBalance(), '$');
