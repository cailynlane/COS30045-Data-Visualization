d3.csv("data/size-counts.csv", d => {
  return {
    size: d.size,
    count: +d.count
  };
}).then(data => {
  console.log(data);
  drawDonutChart(data);   
});

const drawDonutChart = data => {

  const width = 800;
  const height = 500;
  const padding = 40;
  const radius = Math.min(width, height) / 2 - padding;  

  const colourScale = d3.scaleOrdinal()
    .domain(data.map(d => d.size))
    .range(["#54e5dc", "#ff4fb3", "#fff36b"]);            

  const pie = d3.pie()
    .value(d => d.count)
    .sort(null);      

  const arcGenerator = d3.arc()
    .innerRadius(radius * 0.6)                       
    .outerRadius(radius)
    .padAngle(0.02)                                     
    .cornerRadius(4);                                   

  const svg = d3.select("#donut_chart")
    .append("svg")
      .attr("viewBox", `0 0 ${width} ${height}`)
      .style("border", "1px solid white");

  const innerChart = svg
    .append("g")
      .attr("transform", `translate(${width / 2}, ${height / 2})`);

  const arcs = innerChart
    .selectAll("path")
    .data(pie(data))                              
    .join("path")
      .attr("d", arcGenerator)
      .attr("fill", d => colourScale(d.data.size))
      .attr("stroke", "#101344")
      .attr("stroke-width", 2);

  innerChart
    .selectAll("text")
    .data(pie(data))
    .join("text")
      .attr("transform", d => `translate(${arcGenerator.centroid(d)})`)
      .attr("text-anchor", "middle")
      .attr("fill", "#101344")
      .style("font-size", "16px")
      .style("font-weight", "bold")
      .text(d => `${d.data.size}: ${d.data.count}`);
};