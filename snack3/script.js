//Crea un array di oggetti che rappresentano degli animali.
//Ogni animale ha un nome, una famiglia e una classe.

const animali = [
    { nome: 'leone', famiglia: 'felidi', classe: 'mammiferi' },
    { nome: 'cane', famiglia: 'canidi', classe: 'mammiferi' },
    { nome: 'gallina', famiglia: 'fasianidi', classe: 'uccelli' },
    { nome: 'elefante', famiglia: 'elefanti', classe: 'mammiferi' },
    { nome: 'tigre', famiglia: 'felidi', classe: 'mammiferi' },
    { nome: 'cavallo', famiglia: 'equidi', classe: 'mammiferi' },
    { nome: 'aquila', famiglia: 'accipitridi', classe: 'uccelli' },
    { nome: 'orso', famiglia: 'ursidi', classe: 'mammiferi' },
    { nome: 'pinguino', famiglia: 'spheniscidae', classe: 'uccelli' },
    { nome: 'serpente', famiglia: 'serpenti', classe: 'rettili' }
]
console.log(animali);

//Crea un nuovo array con la lista dei mammiferi.

const animaliMammiferi = animali.filter(animale => animale.classe == 'mammiferi');
console.log(animaliMammiferi);