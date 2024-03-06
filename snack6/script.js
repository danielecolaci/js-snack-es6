//Creare un array di oggetti di squadre di calcio.
//Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
//Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.

const footballTeams = [
    { name: 'Inter Milan', points: 0, fouls: 0 },
    { name: 'Juventus FC', points: 0, fouls: 0 },
    { name: 'AC Milan', points: 0, fouls: 0 },
    { name: 'Bologna FC', points: 0, fouls: 0 },
    { name: 'AS Roma', points: 0, fouls: 0 },
    { name: 'Atalanta', points: 0, fouls: 0 },
    { name: 'SSC Napoli', points: 0, fouls: 0 },
    { name: 'ACF Fiorentina', points: 0, fouls: 0 },
    { name: 'SS Lazio', points: 0, fouls: 0 },
    { name: 'Torino FC', points: 0, fouls: 0 },
    { name: 'AC Monza', points: 0, fouls: 0 },
    { name: 'Genoa CF', points: 0, fouls: 0 },
    { name: 'US Lecce', points: 0, fouls: 0 },
    { name: 'Empoli FC', points: 0, fouls: 0 },
    { name: 'Udinese', points: 0, fouls: 0 },
    { name: 'Frosinone Calcio', points: 0, fouls: 0 },
    { name: 'Hellas Verona', points: 0, fouls: 0 },
    { name: 'Cagliari Calcio', points: 0, fouls: 0 },
    { name: 'US Sassuolo', points: 0, fouls: 0 },
    { name: 'US Salernitana', points: 0, fouls: 0 },
]

//Generare numeri random al posto degli 0 nelle proprietà: punti fatti e falli subiti.

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

footballTeams.forEach(team => {
    team.points = getRandomNumber(0, 114);
    team.fouls = getRandomNumber(0, 100);
})

/* console.log(footballTeams); */

//Metto in ordine la classifica
const tables = footballTeams.sort(function (a, b) {
    return b.points - a.points
})
/* console.log(tables); */

//Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e punti e stampiamo tutto in console e in pagina.

const tablesTeamsPoints = tables.map(({ name, points }) => ({ name, points }));
console.log(tablesTeamsPoints);