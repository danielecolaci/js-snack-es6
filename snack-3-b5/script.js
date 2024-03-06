//Scrivi una funzione che accetti una stringa come argomento e la ritorni girata

function stringReverse(string) {
    return string.split('').reverse().join('');
}

const reversed = stringReverse('Daniele');
console.log(reversed);