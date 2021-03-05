const data = require('./solaire.json')

const communesVaudoises = d => d.Canton ==='Vaud'

const resultats = data
    .filter(communesVaudoises)
    .map(d => ({nom: d.MunicipalityName, potentiel: d.Scenario3_RoofsFacades_PotentialSolarElectricity_GWh }))
    .sort((a, b) => a.potentiel > b.potentiel ? -1 : 1)
    .filter(d => d.potentiel > 50)

    console.log(JSON.stringify(resultats))