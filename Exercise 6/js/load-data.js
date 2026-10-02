d3.csv("data/tv-data.csv", d => {
  return {
    brand: d.brand,
    model: d.model,
    screenTech: d.screenTech,
    screenSize: +d.screenSize,
    star: +d.star,
    energyConsumption: +d.energyConsumption
  };
}).then(data => {
  console.log(data.length, data[0]);
  drawHistogram(data);
  drawScatterplot(data);
  createTooltip();
  createHistogramTooltip();
  handleMouseEvents();
  populateFilters(data);
});