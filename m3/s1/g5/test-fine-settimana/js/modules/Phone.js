import { Chiamata } from "./Chiamata.js";
import { utenti } from "./variables.js";
export let index = 0;
export class Phone {
    constructor(carica = 0, costoMinuto) {
        this.carica = carica;
        this.costoMinuto = costoMinuto;
        this.registroChiamate = [];
        this.id = index;
        this.numeroChiamate = 0;
        index++;
        utenti.push(this);
    }
    get numero404() {
        return `${this.carica}€`;
    }
    get getNumeroChiamate() {
        return this.numeroChiamate;
    }
    ricarica(euro) {
        this.carica += euro;
        console.log(`Nuovo credito: ${this.carica}€`);
    }
    effettuaChiamata(destinatario, durata) {
        this.chiamata(durata);
        let dataCorrente = new Date();
        let mese = dataCorrente.getMonth() + 1;
        let giorno = dataCorrente.getDate();
        let ora = dataCorrente.getHours();
        let minuti = dataCorrente.getMinutes();
        let orarioChiamata = `${mese}/${giorno} - ${ora}:${minuti}`;
        new Chiamata(durata, orarioChiamata, destinatario, this.id);
    }
    chiamata(min) {
        this.numeroChiamate++;
        this.carica -= min * this.costoMinuto;
        console.log(`Nuovo credito: ${this.carica}€`);
    }
    azzeraChiamate() {
        this.numeroChiamate = 0;
        this.registroChiamate = [];
    }
    mostraRegistroChiamate() {
        if (this.registroChiamate.length == 0) {
            console.log(`Non ci sono chiamate`);
            return;
        }
        this.registroChiamate.forEach(chiamata => {
            console.log(chiamata);
        });
    }
    filtraChiamatePerDataOra(filtro) {
        console.log(this.registroChiamate.filter(chiamata => chiamata.orarioChiamata.includes(filtro)));
    }
}
//# sourceMappingURL=Phone.js.map