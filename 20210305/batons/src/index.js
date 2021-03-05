import {
  axisLeft,
  select,
  scaleLinear,
  max,
} from 'd3'

//  const job = require('../../data.json')

 const DATA = [
  {
      "nom": "Lausanne",
      "potentiel": 461.19
  },
  {
      "nom": "Yverdon-les-Bains",
      "potentiel": 166.02
  },
  {
      "nom": "Ollon",
      "potentiel": 105.03
  },
  {
      "nom": "Montreux",
      "potentiel": 103.19
  },
  {
      "nom": "Ecublens (VD)",
      "potentiel": 98.98
  },
  {
      "nom": "Payerne",
      "potentiel": 97.43
  },
  {
      "nom": "Nyon",
      "potentiel": 93.21
  },
  {
      "nom": "Aigle",
      "potentiel": 91.51
  },
  {
      "nom": "Renens (VD)",
      "potentiel": 86.18
  },
  {
      "nom": "Pully",
      "potentiel": 80.55
  }
]

const WIDTH = 1000
const HEIGHT = 500
const MARGIN = 5
const MARGIN_LEFT = 50
const MARGIN_BOTTOM = 50
const BAR_WIDTH = (WIDTH - MARGIN_LEFT) / DATA.length

const svg = select('body')
  .append('svg')
  .attr('viewBox', `0 0 ${WIDTH} ${HEIGHT}`)

const yScale = scaleLinear()
  .domain([0, max(DATA, d => d.potentiel)])
  .range([HEIGHT - MARGIN_BOTTOM, 0])


const g = svg.append('g')
  .attr('transform', `translate(${MARGIN_LEFT}, 0)`)

g.selectAll('rect')
  .data(DATA)
  .enter()
  .append('rect')
  .attr('x', (d, i) =>  i * BAR_WIDTH)
  .attr('width', BAR_WIDTH - MARGIN)
  .attr('y', d => yScale(d.potentiel))
  .attr('height', d => HEIGHT - MARGIN_BOTTOM - yScale(d.potentiel))
  .attr('fill', 'steelblue')

g.selectAll('text')
  .data(DATA)
  .enter()
  .append('text')
  .text(d => d.nom)
  .attr('x', (d, i) =>  i * BAR_WIDTH + BAR_WIDTH / 2)
  .attr('y', HEIGHT - MARGIN_BOTTOM / 2)
  .attr('text-anchor', 'middle')

const axisY = axisLeft().scale(yScale)
  .tickFormat(d => `${d / 1000}k`)
  .ticks(5)

svg.append('g')
  .attr('transform', `translate(${MARGIN_LEFT - 3})`)
  .call(axisY)
