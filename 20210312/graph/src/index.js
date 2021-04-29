import {
  axisLeft,
  select,
  scaleLinear,
  max,
  arc,
  pie
} from 'd3'

const DATA = [
  { nom: 'Lausanne', population: 138905 },
  { nom: 'Yverdon-les-Bains', population: 30143 },
  { nom: 'Montreux', population: 26574 },
  { nom: 'Renens', population: 21036 },
  { nom: 'Nyon', population: 20533 },
  { nom: 'Vevey', population: 19827 },
]

const WIDTH = 1000
const HEIGHT = 500
const MARGIN = 5
const MARGIN_LEFT = 50
const MARGIN_BOTTOM = 50
const BAR_WIDTH = (WIDTH - MARGIN_LEFT) / DATA.length

/*  ----- Crée le graphique en camembert -----   */

const CAMWIDTH = 200;
const CAMHEIGHT = 200;

let getPieData = pie().value(d => d.population);
let pieData = getPieData(DATA);

const svg = select('body')
  .append('svg')
  .attr('viewBox', `0 0 ${CAMWIDTH} ${CAMHEIGHT}`);


const arcFunc = arc()
  .innerRadius(5)
  .outerRadius(CAMHEIGHT / 3)
  .padAngle(0.02)

const group = svg.append('g')
  .attr('transform', `translate(${CAMHEIGHT/2}, ${CAMWIDTH/2})`);  


const color = ({data}) => {
  switch (data.nom) {
    case 'Lausanne': return 'red'
    case 'Yverdon-les-Bains': return "#fe4b83"
    case 'Montreux': return "#e2b72f"
    case 'Renens': return "#52f667"
    case 'Nyon' : return "#23abd8"
    case 'Vevey' : return "#6e40aa"
  }
}

group.selectAll('path')
  .data(pieData)
  .enter()
  .append('path')
  .attr('d', arcFunc)
  .attr('fill', color);

group.selectAll('text')
  .data(pieData)
  .enter()
  .append('text')
  .attr('transform', d => `translate(${arcFunc.centroid(d)})`)
  .attr('text-anchor', 'middle')
  .attr('font-family', 'sans-serif')
  .attr('font-size', '0.5rem')
  .text(d => d.data.nom)

/*  ----- Crée le graphique en barres -----   */

// const svg = select('body')
//   .append('svg')
//   .attr('viewBox', `0 0 ${WIDTH} ${HEIGHT}`)

// const yScale = scaleLinear()
//   .domain([0, max(DATA, d => d.population)])
//   .range([HEIGHT - MARGIN_BOTTOM, 0])


// const g = svg.append('g')
//   .attr('transform', `translate(${MARGIN_LEFT}, 0)`)

// g.selectAll('rect')
//   .data(DATA)
//   .enter()
//   .append('rect')
//   .attr('x', (d, i) =>  i * BAR_WIDTH)
//   .attr('width', BAR_WIDTH - MARGIN)
//   .attr('y', d => yScale(d.population))
//   .attr('height', d => HEIGHT - MARGIN_BOTTOM - yScale(d.population))
//   .attr('fill', 'steelblue')

// g.selectAll('text')
//   .data(DATA)
//   .enter()
//   .append('text')
//   .text(d => d.nom)
//   .attr('x', (d, i) =>  i * BAR_WIDTH + BAR_WIDTH / 2)
//   .attr('y', HEIGHT - MARGIN_BOTTOM / 2)
//   .attr('text-anchor', 'middle')

// const axisY = axisLeft().scale(yScale)
//   .tickFormat(d => `${d / 1000}k`)
//   .ticks(5)

// svg.append('g')
//   .attr('transform', `translate(${MARGIN_LEFT - 3})`)
//   .call(axisY)
