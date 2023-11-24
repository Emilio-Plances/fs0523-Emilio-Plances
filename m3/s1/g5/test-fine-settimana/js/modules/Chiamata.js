import { utenti } from "./variables.js";
export class Chiamata {
    constructor(durata, orarioChiamata, IDdestinatario, IDmittente) {
        this.durata = durata;
        this.orarioChiamata = orarioChiamata;
        this.IDdestinatario = IDdestinatario;
        this.IDmittente = IDmittente;
        [IDmittente, IDdestinatario].forEach(ID => {
            utenti[ID].numeroChiamate++;
            utenti[ID].registroChiamate.push(this);
        });
    }
}
//# sourceMappingURL=Chiamata.js.map