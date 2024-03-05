//Crea un array composto da 10 automobili. Ogni oggetto avrà le seguenti proprietà: marca, modello e alimentazione.
const automobili = [
    {
        marca: 'Fiat',
        modello: 'Panda',
        alimentazione: 'metano',
    },
    {
        marca: 'Opel',
        modello: 'Corsa',
        alimentazione: 'diesel',
    },
    {
        marca: 'Peugeot',
        modello: '208',
        alimentazione: 'diesel',
    },
    {
        marca: 'Fiat',
        modello: 'Multipla',
        alimentazione: 'benzina',
    },
    {
        marca: 'Ford',
        modello: 'Fiesta',
        alimentazione: 'benzina',
    },
    {
        marca: 'Toyota',
        modello: 'Yaris',
        alimentazione: 'elettrica',
    },
    {
        marca: 'Citroen',
        modello: 'C3',
        alimentazione: 'diesel',
    },
    {
        marca: 'Renault',
        modello: 'Clio',
        alimentazione: 'elettrica',
    },
    {
        marca: 'Hyundai',
        modello: 'i20',
        alimentazione: 'gpl',
    },
    {
        marca: 'Fiat',
        modello: 'Punto',
        alimentazione: 'metano',
    }
];

console.log(automobili);

//Dividi le automobili in 3 array separati: nel primo solo quelle a benzina, nel secondo quelle a diesel e nel terzo tutte le altre.
const autoBenzina = automobili.filter(auto => auto.alimentazione === 'benzina');
const autoDiesel = automobili.filter(auto => auto.alimentazione === 'diesel');
const autoBassaEmissione = automobili.filter(auto => auto.alimentazione !== 'benzina' && auto.alimentazione !== 'diesel');


//Stampa gli array separatamente
console.log(autoBenzina);
console.log(autoDiesel);
console.log(autoBassaEmissione);