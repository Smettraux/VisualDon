const data = require('./bars_yverdon.json')
const rewind = require('@mapbox/geojson-rewind')
const fs = require('fs')

const result = data.features
  .filter(d => d.geometry.type === 'Point' && d.properties.amenity ==='bar')
  .map(d => d.geometry.coordinates)
//   .map(d => rewind(d, true))

// fs.writeFileSync('../src/bars.json', JSON.stringify(result), 'utf-8')
console.log(
    JSON.stringify(
      result
    )
  )