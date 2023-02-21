/*
Chiedi all’utente il suo nome,
poi chiedi il suo cognome,
poi chiedi il suo colore preferito
Infine scrivi sulla pagina nomecognomecolorepreferito23
*/

const myName = prompt("Qual'è il tuo nome?");
const mySurname = prompt("Qual'è il tuo cognome?");
const myFavoriteColor = prompt("Qual'è il tuo colore preferito?");

document.getElementById('password').innerHTML = `La tua password è: ${myName}${mySurname}${myFavoriteColor}23`;
