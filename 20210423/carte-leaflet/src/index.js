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
  L.marker([lat, lon], { icon }).bindPopup(d.properties.name || d.properties['addr:street'] || d.properties.uid).addTo(map)
})
