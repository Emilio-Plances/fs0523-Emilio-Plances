"use strict";
class Phone {
    constructor(carica = 0, numeroChiamate, costoMinuto) {
        this.carica = carica;
        this.numeroChiamate = numeroChiamate;
        this.costoMinuto = costoMinuto;
    }
    ricarica(euro) {
        this.carica += euro;
    }
    get numero404() {
        return `${this.carica}€`;
    }
    get getNumeroChiamate() {
        return this.numeroChiamate;
    }
    chiamata(min) {
        let costoChiamata = min * this.costoMinuto;
        this.numeroChiamate++;
        console.log(`Costo chiamate: ${costoChiamata}€`);
        this.carica -= costoChiamata;
    }
    azzeraChiamate() {
        this.numeroChiamate = 0;
    }
}
let telefono1 = new Phone(10, 0, 0.20);
let telefono2 = new Phone(10, 0, 0.20);
let telefono3 = new Phone(10, 0, 0.20);
