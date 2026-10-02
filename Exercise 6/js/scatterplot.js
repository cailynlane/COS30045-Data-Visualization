const drawScatterplot = data => {

  const plotData = data.filter(d => d.energyConsumption <= 1800);

  const svg = d3.select("#scatterplot")
    .append("svg")
      .attr("viewBox", `0 0 ${width} ${height}`);

  innerChartS = svg
    .append("g")
      .attr("transform", `translate(${margin.left}, ${margin.top})`);

  xScaleS
    .domain([0, d3.max(plotData, d => d.star)])
    .nice()
    .range([0, innerWidth]);

  yScaleS
    .domain([0, d3.max(plotData, d => d.energyConsumption)])
    .nice()
    .range([innerHeight, 0]);

  innerChartS
    .selectAll("circle")
    .data(plotData)
    .join("circle")
      .attr("cx", d => xScaleS(d.star))
      .attr("cy", d => yScaleS(d.energyConsumption))
      .attr("r", 4)
      .attr("fill", d => colorScale(d.screenTech.toUpperCase()))
      .attr("opacity", 0.5);

  innerChartS.append("g")
    .attr("transform", `translate(0, ${innerHeight})`)
    .call(d3.axisBottom(xScaleS));

  innerChartS.append("g")
    .call(d3.axisLeft(yScaleS));

  svg.append("text")
    .attr("class", "axis-label")
    .attr("x", margin.left + innerWidth / 2)
    .attr("y", height - 12)
    .attr("text-anchor", "middle")
    .text("Star rating");

  svg.append("text")
    .attr("class", "axis-label")
    .attr("transform", "rotate(-90)")
    .attr("x", -(margin.top + innerHeight / 2))
    .attr("y", 20)
    .attr("text-anchor", "middle")
    .text("Energy consumption (kWh/year)");

  const legend = innerChartS
    .append("g")
      .attr("transform", `translate(${innerWidth - 90}, 0)`);

  colorScale.domain().forEach((tech, i) => {
    const item = legend.append("g")
      .attr("transform", `translate(0, ${i * 20})`);

    item.append("rect")
      .attr("width", 14)
      .attr("height", 14)
      .attr("fill", colorScale(tech));

    item.append("text")
      .attr("x", 22)
      .attr("y", 12)
      .attr("fill", "white")
      .style("font-size", "13px")
      .text(tech);
  });
};