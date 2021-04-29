import L from 'leaflet'
import arbres from './arbres.json'
import batiments from './batiments.json'
import bars from './bars.json'

const map = L.map ('map').setView([46.7785, 6.6412], 16)

L.tileLayer('https://tile.osm.ch/switzerland/{z}/{x}/{y}.png', {
	maxZoom: 18,
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
	bounds: [[45, 5], [48, 11]]
}).addTo(map);

const icon = L.icon({
  iconUrl: '../images/beer.png',
  iconSize: [30, 30],
  iconAnchor: [15, 30],
})

console.log(bars.features);

bars.features.map(d => {
  
  const [lon, lat] = d.geometry.coordinates;
  console.log(d.geometry.coordinates);
  L.marker([lat, lon], { icon }).addTo(map)
})

// L.geoJSON(
//   bars,
//   {
//     style: feature =>
//       feature.properties['name'] === 'Black Lodge'
//           ? { color: 'indianred' }
//           : { color: 'steelblue' },
//       onEachFeature: (feature, layer) =>
//         layer.bindPopup(feature.properties.name || feature.properties['addr:street'] || feature.properties.uid)
//   }
// ).addTo(map)



// const map = L.map('map').setView([46.78104, 6.64707], 17)

// L.tileLayer(
//   'https://stamen-tiles-{s}.a.ssl.fastly.net/toner-lite/{z}/{x}/{y}{r}.{ext}',
//   {
//     attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
//     subdomains: 'abcd',
//     minZoom: 0,
//     maxZoom: 20,
//     ext: 'png',
//   })
//     .addTo(map)



// arbres.map(d => {
//   const [lon, lat] = d
//   L.marker([lat, lon], { icon }).addTo(map)
// })

// L.geoJSON(
//   batiments,
//   {
//     style: feature =>
//       feature.properties['name'] === 'Centre Saint-Roch'
//         ? { color: 'indianred' }
//         : { color: 'steelblue' },
//     onEachFeature: (feature, layer) =>
//       layer.bindPopup(feature.properties.name || feature.properties['addr:street'] || feature.properties.uid)
      
//   },
// ).addTo(map)

