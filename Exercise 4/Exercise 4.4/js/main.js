// Ex 4.3: canvas
const svg = d3.select(".responsive-svg-container")
  .append("svg")
    .attr("viewBox", "0 0 1200 1600")
    .style("border", "1px solid white");

// Ex 4.4: load the CSV and make sure count is a number
d3.csv("data/tvBrandCount.csv", d => {
  return {
    brand: d.brand,
    count: +d.count        // the + turns the text "1020" into the number 1020
  };
}).then(data => {
  console.log(data);                               // the whole array
  console.log(data.length);                        // how many rows
  console.log(d3.max(data, d => d.count));         // biggest count
  console.log(d3.min(data, d => d.count));         // smallest count
  console.log(d3.extent(data, d => d.count));      // [min, max]

  data.sort((a, b) => b.count - a.count);          // biggest first

  drawBarChart(data);
});

// placeholder so the call above works, we build the real chart in 4.5
const drawBarChart = data => {
  console.log("drawBarChart received", data.length, "rows");
};