import { Phone } from "./modules/Phone.js";
import { utenti } from "./modules/variables.js";
let emilio = new Phone(10, 0.20);
let mauro = new Phone(10, 0.20);
let emanuele = new Phone(10, 0.20);
/*_____________________________COLLEGAMENTI CON L'HTML_________________________________________*/
let callBtn = document.querySelector(`#call-btn`);
let mostraStorico = document.querySelector(`#mostra-storico`);
let minutes = document.querySelector(`#minuti`);
let caller = document.querySelector(`#caller`);
let called = document.querySelector(`#called`);
let user = document.querySelector(`#storico`);
let searchBTN = document.querySelector(`#find`);
let search = document.querySelector(`#search`);
let filterStorico = document.querySelector(`#select-filter-storico`);
// emilio.ricarica(30);
// emilio.numero404;
// emilio.getNumeroChiamate
// emilio.azzeraChiamate();
callBtn === null || callBtn === void 0 ? void 0 : callBtn.addEventListener("click", () => {
    let tempoChiamata = Number(minutes === null || minutes === void 0 ? void 0 : minutes.value);
    let callerID = Number(caller === null || caller === void 0 ? void 0 : caller.value);
    let calledID = Number(called === null || called === void 0 ? void 0 : called.value);
    if (callerID == calledID) {
        alert(`Non puoi chiamarti da solo`);
        return;
    }
    utenti[callerID].effettuaChiamata(utenti[calledID].id, tempoChiamata);
    console.log(utenti);
});
mostraStorico === null || mostraStorico === void 0 ? void 0 : mostraStorico.addEventListener("click", () => {
    let userID = Number(user === null || user === void 0 ? void 0 : user.value);
    utenti[userID].mostraRegistroChiamate();
});
searchBTN === null || searchBTN === void 0 ? void 0 : searchBTN.addEventListener("click", () => {
    let filterStoricoID = Number(filterStorico === null || filterStorico === void 0 ? void 0 : filterStorico.value); //
    if (!(search === null || search === void 0 ? void 0 : search.value))
        return;
    utenti[filterStoricoID].filtraChiamatePerDataOra(search === null || search === void 0 ? void 0 : search.value);
});
//# sourceMappingURL=script.js.map