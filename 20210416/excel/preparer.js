const xlsx = require('xlsx')

const file = xlsx.readFile('peinaussteiger2018.xlsx')
const json = xlsx.utils.sheet_to_json(file.Sheets['data'])


const garesVaudoises = d => d.Kanton ==='VD'

const resultats = json
    .filter(garesVaudoises)
    .map(d => ({trafJourMoy: d.DTV_2018, nom: d.Bahnhof_Haltestelle}))
    .sort((a, b) => a.nom > b.nom ? -1 : 1)
    .filter(d => d.trafJourMoy > 10000)

let columns = [];

    resultats.forEach(element =>{
        columns.push([element.nom, element.trafJourMoy])
    });

    console.log(JSON.stringify(columns))