//Crea 10 oggetti che rappresentano una zucchina.

const zucchine = [
    { variety: 'Zucchina romanesca', weight: 200, lenght: 15 },
    { variety: 'Zucchina trombetta', weight: 180, lenght: 18 },
    { variety: 'Zucchina costata', weight: 250, lenght: 21 },
    { variety: 'Zucchina crookneck', weight: 120, lenght: 20 },
    { variety: 'Zucchina rampicante', weight: 230, lenght: 12 },
    { variety: 'Zucchina verde', weight: 300, lenght: 14 },
    { variety: 'Zucchina bianca', weight: 190, lenght: 10 },
    { variety: 'Zucchina gialla', weight: 110, lenght: 17 },
    { variety: 'Zucchina tonda', weight: 240, lenght: 11 },
    { variety: 'Zucchina striata', weight: 210, lenght: 15 },
];

console.log(zucchine);

//Dividi in due array separati le zucchine che misurano meno o più di 15cm.

const lenghtUnder15 = zucchine.filter(zucchina => zucchina.lenght <= 15);
console.log(lenghtUnder15);
const lenghtOver15 = zucchine.filter(zucchina => zucchina.lenght > 15);
console.log(lenghtOver15);

//Stampa separatamente quanto pesano i due gruppi di zucchine.

let totalWeightUnder = 0;
let totalWeightOver = 0;

lenghtUnder15.forEach(zucchina => {
    totalWeightUnder += zucchina.weight;
});

lenghtOver15.forEach(zucchina => {
    totalWeightOver += zucchina.weight;
});

console.log(`Il peso totale delle zucchine che misurano meno di 15cm è di ${totalWeightUnder}g`);
console.log(`Il peso totale delle zucchine che misurano più di 15cm è di ${totalWeightOver}g`);