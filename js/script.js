let nome = prompt("Inserisci il tuo nome");
let cognome = prompt("Inserisci il tuo cognome");
let colore_preferito = prompt("Inserisci il tuo colore preferito");

console.log(nome, cognome, colore_preferito);

let passgn = `${nome}${cognome}${colore_preferito}`;
document.getElementById("mypw").innerText = passgn + 23;
