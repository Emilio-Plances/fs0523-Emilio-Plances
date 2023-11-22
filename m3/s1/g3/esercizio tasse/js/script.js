"use strict";
class Tassa {
    constructor(codred, ral) {
        this.codred = codred;
        this.ral = ral;
        this.appliedcodred = this.ral - (this.ral * this.codred / 100);
        this.tINPS = this.findtINPS();
        this.tIRPEF = this.findtIRPEF();
    }
    findtINPS() {
        return this.appliedcodred * 26.23 / 100;
    }
    findtIRPEF() {
        if (this.ral <= 15000)
            return this.appliedcodred * 23 / 100;
        else if (this.ral <= 28000)
            return this.appliedcodred * 25 / 100;
        else if (this.ral <= 50000)
            return this.appliedcodred * 35 / 100;
        else
            return this.appliedcodred * 43 / 100;
    }
    get getUtileTasse() {
        return this.tINPS + this.tIRPEF;
    }
    get getTasseInps() {
        return this.tINPS;
    }
    get getTIrpef() {
        return this.tIRPEF;
    }
    get getran() {
        let utile = this.getUtileTasse;
        return this.ral - utile;
    }
}
class Lavoratore extends Tassa {
}
let Mauro = new Lavoratore(78, 27000);
