//A partire da un array di stringhe, crea un secondo array formattando le stringhe del primo in minuscolo con l'iniziale maiuscola
const nomi = [
    'Daniele',
    'FILIPPO',
    'luca'
];
console.log(nomi);

const nomiFormattati = nomi.map(nome => {
    return nome.charAt(0).toUpperCase() + nome.slice(1).toLowerCase();
})
console.log(nomiFormattati);