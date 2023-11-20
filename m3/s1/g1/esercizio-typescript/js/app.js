"use strict";
class UsefulFunctions {
    closer() {
        let randomNumber = Math.floor(Math.random() * 100) + 1;
        let players = this.getPlayers();
        let [g1, g2] = players;

        console.log(`Il numero uscito è il ${randomNumber}`);

        if (parseInt(g1.number) == parseInt(g2.number) && parseInt(g1.number) == randomNumber)
            return `State palesemente barando`;

        if (parseInt(g1.number) == randomNumber)
            return `Complimenti ${g1.name} hai indovinato!`;

        if (parseInt(g2.number) == randomNumber)
            return `Complimenti ${g2.name} hai indovinato!`;

        
        let diff1;
        let diff2;
        diff1 = Math.abs(randomNumber - parseInt(g1.number));
        diff2 = Math.abs(randomNumber - parseInt(g2.number));
        if (diff1 == diff2)
            return `Questo è un pareggio!`;
        return `Nessuno di voi due ha indovinato ma si è avvicinato di più ${diff1 < diff2 ? g1.name : g2.name}!`;
        
    }

    
    getPlayers() {
        let g1 = document.querySelector(`#g1`);
        let g2 = document.querySelector(`#g2`);
        let numG1 = document.querySelector(`#num-g1`);
        let numG2 = document.querySelector(`#num-g2`);
        let player1 = {
            name: (g1 === null || g1 === void 0 ? void 0 : g1.value) || ``,
            number: (numG1 === null || numG1 === void 0 ? void 0 : numG1.value) || ``
        };
        let player2 = {
            name: (g2 === null || g2 === void 0 ? void 0 : g2.value) || ``,
            number: (numG2 === null || numG2 === void 0 ? void 0 : numG2.value) || ``
        };
        return [player1, player2];
    }
}
let compare = new UsefulFunctions();
let btnCompare = document.querySelector(`#submit`);
btnCompare === null || btnCompare === void 0 ? void 0 : btnCompare.addEventListener(`click`, () => {
    console.log(compare.closer());
});
