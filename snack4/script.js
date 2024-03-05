//Crea un array di oggetti che rappresentano delle persone.
//Ogni persona ha un nome, un cognome e un’età.

const persone = [
    { name: 'Mario', surname: 'Rossi', age: 25 },
    { name: 'Anna', surname: 'Bianchi', age: 17 },
    { name: 'Luca', surname: 'Verdi', age: 30 },
    { name: 'Giovanni', surname: 'Neri', age: 22 },
    { name: 'Francesca', surname: 'Gialli', age: 16 },
    { name: 'Alessio', surname: 'Rosa', age: 28 },
    { name: 'Sara', surname: 'Blu', age: 19 },
    { name: 'Paolo', surname: 'Arancio', age: 15 },
    { name: 'Elena', surname: 'Viola', age: 32 },
    { name: 'Marco', surname: 'Marrone', age: 42 },
];

console.log(persone);

//Crea un nuovo array inserendo, per ogni persona, una frase con il nome e cognome e l’indicazione se può guidare, in base all’età.

const personeGuida = persone.map(persona => {
    if (persona.age >= 18) {
        return `${persona.name} ${persona.surname} è maggiorenne e può guidare`;
    } else {
        return `${persona.name} ${persona.surname} è minorenne e non può guidare`;
    }

})

console.log(personeGuida);
