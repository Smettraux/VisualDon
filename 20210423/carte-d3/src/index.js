import {
  geoMercator,
  geoPath,
  select,
} from 'd3'
import arbres from './arbres.json'
import batiments from './batiments.json'
import routes from './routes.json'
import bars from './bars.json'

const WIDTH = 800
const HEIGHT = 450

const projection = geoMercator()
  .fitExtent(
    [[0, 0], [WIDTH, HEIGHT]],
    {
      type: 'Feature',
      geometry: {
        type: 'LineString',
        coordinates: [[6.63738,46.77815], [6.64159,46.77977]]} 
      }
  )

const pathGenerator = geoPath().projection(projection)

const svg = select('#map').append('svg')
  .attr('viewBox', `0 0 ${WIDTH} ${HEIGHT}`)

  svg.selectAll('path.routes')
  .data(routes)
  .enter()
  .append('path')
  .attr('class', 'routes')
  .attr('d', pathGenerator)
  .attr('stroke', 'lightgrey')
  .attr('fill', 'none')
  .attr('stroke-width', 5)

svg.selectAll('path.bars')
  .data(bars)
  .enter()
  .append('path')
  .attr('class', 'bars')
  .attr('d', pathGenerator)
  .attr('fill', 'grey')

// svg.selectAll('circle')
//   .data(arbres)
//   .enter()
//   .append('circle')
//   .attr('cx', d => projection(d)[0])
//   .attr('cy', d => projection(d)[1])
//   .attr('r', 10)
//   .attr('fill', 'green')