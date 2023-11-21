"use strict";
class SonAccount {
    constructor(name) {
        this.name = name;
        this.balance = 0;
    }
    deposit(entrata) {
        this.balance += entrata;
        console.log(`Momentaneamente hai ${this.balance}€ nel tuo conto`);
    }
    withdraw(uscita) {
        this.balance -= uscita;
        if (this.balance < 0)
            console.log(`Bancarotta! Vendi le tue proprietà!`);
        else
            console.log(this.balance);
    }
}
class MomAccount extends SonAccount {
    constructor(_name) {
        super(_name);
    }
    interesse() {
        this.balance = this.balance + (this.balance * 10 / 100);
    }
}
let Mario = new SonAccount(`Mario Rossi`);
let Maria = new MomAccount(`Maria Rossi`);
