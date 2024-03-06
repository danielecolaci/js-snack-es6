//Creare un array di oggetti:
//Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.

const bikes = [
    { name: 'gazelle', weight: 2.18 },
    { name: 'trek', weight: 1.90 },
    { name: 'scott', weight: 3.05 },
    { name: 'bold', weight: 2.40 },
    { name: 'bianchi', weight: 2.87 },
]

console.log(bikes);

//Stampare in console e in pagina la bici con peso minore utilizzando destructuring e template literal.

let findBike = bikes[0];

bikes.forEach((bike) => {
    if (bike.weight < findBike.weight) {
        findBike = bike;
    }
});

console.log(findBike);

const markupElement = document.getElementById('result');

const { name, weight } = findBike;
markupElement.innerHTML = `La bici più leggera è <b>${name}</b> e pesa <b>${weight}kg</b>.`;