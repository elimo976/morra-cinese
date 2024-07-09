document.addEventListener("DOMContentLoaded", function () {
    const inizia = document.querySelector("#inizia");
    const you = document.querySelector("#you");
    const cpu = document.querySelector("#cpu");
    const punteggioYou = document.querySelector("#punteggioYou");
    const punteggioCpu = document.querySelector("#punteggioCpu");
    const risultato = document.querySelector("#risultato");
    const messaggioFinale = document.querySelector("#messaggioFinale");
    let countYou = 0;
    let countCpu = 0;
    let partiteGiocate = 0;
    const maxPartite = 10;

    const linkRicomincia = document.createElement("a");
    linkRicomincia.href = "#";
    linkRicomincia.innerHTML = "Nuova partita";
    linkRicomincia.addEventListener("click", resetGame);

    inizia.addEventListener("click", function () {
        if (partiteGiocate >= maxPartite) {
            return;
        }

        const sceltaYou = Math.floor(Math.random() * 3) + 1;
        const sceltaCpu = Math.floor(Math.random() * 3) + 1;
        console.log(`Scelta dell'utente: ${sceltaYou}`);
        console.log(`Scelta del computer: ${sceltaCpu}`);

        you.style.display = 'block';
        cpu.style.display = 'block';
        you.className = '';
        cpu.className = '';
        risultato.className = '';

        let sceltaClasse;
        if (sceltaYou === 1) {
            sceltaClasse = 'fogliaImg';
        } else if (sceltaYou === 2) {
            sceltaClasse = 'forbiceImg';
        } else {
            sceltaClasse = 'sassoImg';
        }
        you.classList.add(sceltaClasse);

        if (sceltaCpu === 1) {
            sceltaClasse = 'fogliaImg';
        } else if (sceltaCpu === 2) {
            sceltaClasse = 'forbiceImg';
        } else {
            sceltaClasse = 'sassoImg';
        }
        cpu.classList.add(sceltaClasse);

        if (sceltaYou === sceltaCpu) {
            risultato.innerHTML = "Partita patta :|";
            risultato.classList.add("patta");

        } else if (sceltaYou === 1 && sceltaCpu === 3 || sceltaYou === 2 && sceltaCpu === 1 || sceltaYou === 3 && sceltaCpu === 2) {
            risultato.innerHTML = "Complimenti, hai vinto :)";
            countYou++;
            risultato.classList.add("vinta");

        } else {
            risultato.innerHTML = "Mi dispiace, hai perso :(";
            countCpu++;
            risultato.classList.add("persa");

        }
        risultato.style.display = 'block';
        punteggioYou.innerHTML = countYou;
        punteggioCpu.innerHTML = countCpu;
        partiteGiocate++;

        if (partiteGiocate >= maxPartite) {
            if (countYou > countCpu) {
                messaggioFinale.innerHTML = "Hai vinto la partita!";
            } else if (countCpu > countYou) {
                messaggioFinale.innerHTML = "Hai perso la partita!";
            } else {
                messaggioFinale.innerHTML = "La partita è finita in parità!";
            }
            messaggioFinale.style.display = "block";
            document.body.classList.add("trasparente");
            messaggioFinale.appendChild(linkRicomincia);
        }
    });

    function resetGame() {
        countYou = 0;
        countCpu = 0;
        partiteGiocate = 0;
        punteggioYou.innerHTML = countYou;
        punteggioCpu.innerHTML = countCpu;
        risultato.style.display = 'none';
        messaggioFinale.style.display = 'none';
        document.body.classList.remove("trasparente");
        you.className = '';
        cpu.className = '';
        risultato.innerHTML = '';

        inizia.disabled = false;
    }
});