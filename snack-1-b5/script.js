//Crea un array di 10 oggetti che rappresentano una zucchina, indicando per ognuna varietà, weight e lunghezza.

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

//Calcola quanto pesano tutte le zucchine.

let totalWeight = 0;

zucchine.forEach(zucchina => {
    totalWeight += zucchina.weight;
});

console.log(`Il peso totale è ${totalWeight}g.`);