const populateFilters = data => {
  const buildButtons = (container, filters, key) => {
    d3.select(container)
      .selectAll("button")
      .data(filters)
      .join("button")
        .text(d => d.label)
        .classed("active", d => d.isActive)
        .on("click", (e, d) => {
          filters.forEach(f => f.isActive = (f.id === d.id));
          d3.selectAll(`${container} button`).classed("active", f => f.isActive);
          selected[key] = d.id;
          applyFilters(data);
        });
  };

  buildButtons("#filters_screen", filters_screen, "tech");
  buildButtons("#filters_size", filters_size, "size");

  d3.select("#rescale").on("click", () => {
    rescaleAxis = !rescaleAxis;
    d3.select("#rescale")
      .classed("active", rescaleAxis)
      .text(`Rescale axis: ${rescaleAxis ? "on" : "off"}`);
    applyFilters(data);
  });
};

const applyFilters = data => {
  const filtered = data.filter(d =>
    (selected.tech === "all" || d.screenTech.toUpperCase() === selected.tech.toUpperCase()) &&
    (selected.size === "all" || d.screenSize === +selected.size)
  );
  updateHistogram(filtered);
  updateScatterplot(filtered);
};

const updateHistogram = filtered => {
  const bins = binGenerator(filtered);
  const yMax = rescaleAxis ? (d3.max(bins, d => d.length) || 1) : fullYMax;
  yScale.domain([0, yMax]).nice();

  innerChart.select(".y-axis")
    .transition()
    .duration(600)
    .call(d3.axisLeft(yScale));

  innerChart
    .selectAll(".bar")
    .data(bins)
    .transition()
    .duration(600)
    .ease(d3.easeCubicOut)
      .attr("y", d => yScale(d.length))
      .attr("height", d => innerHeight - yScale(d.length));
};

const updateScatterplot = filtered => {
  const visible = new Set(filtered);
  innerChartS
    .selectAll("circle")
    .style("pointer-events", d => visible.has(d) ? "all" : "none")
    .transition()
    .duration(400)
    .attr("opacity", d => visible.has(d) ? 0.5 : 0);
};

const buildTooltip = (parent, id, w, h, lineClasses) => {
  const tooltip = parent
    .append("g")
      .attr("id", id)
      .style("opacity", 0)
      .style("pointer-events", "none");

  tooltip.append("rect")
    .attr("width", w)
    .attr("height", h)
    .attr("rx", 6)
    .attr("fill", barColor)
    .attr("stroke", "#54e5dc")
    .attr("opacity", 0.9);

  lineClasses.forEach((cls, i) => {
    tooltip.append("text")
      .attr("class", cls)
      .attr("x", 10)
      .attr("y", 21 + i * 19)
      .attr("fill", "white")
      .style("font-size", i === 0 ? "14px" : "13px")
      .style("font-weight", i === 0 ? "bold" : "normal");
  });
};

const createTooltip = () =>
  buildTooltip(innerChartS, "tooltip", tooltipWidth, tooltipHeight, ["t1", "t2", "t3"]);

const createHistogramTooltip = () =>
  buildTooltip(innerChart, "tooltip-hist", histTooltipWidth, histTooltipHeight, ["t1", "t2"]);

const showTooltip = (id, texts, x, y) => {
  const tooltip = d3.select(`#${id}`);
  texts.forEach((t, i) => tooltip.select(`.t${i + 1}`).text(t));
  tooltip
    .attr("transform", `translate(${x}, ${y})`)
    .transition()
    .duration(150)
    .style("opacity", 1);
};

const hideTooltip = id =>
  d3.select(`#${id}`)
    .transition()
    .duration(150)
    .style("opacity", 0);

const handleMouseEvents = () => {
  d3.select("#scatterplot")
    .selectAll("circle")
    .on("mouseenter", (e, d) => {
      const cx = +e.target.getAttribute("cx");
      const cy = +e.target.getAttribute("cy");
      let x = cx + 12;
      let y = cy - tooltipHeight - 8;
      if (x + tooltipWidth > innerWidth) x = cx - tooltipWidth - 12;
      if (y < 0) y = cy + 12;
      const model = String(d.model);
      const shortModel = model.length > 26 ? model.slice(0, 25) + "…" : model;
      showTooltip("tooltip", [d.brand, shortModel, `${d.screenSize} inch ${d.screenTech}`], x, y);
    })
    .on("mouseleave", () => hideTooltip("tooltip"));

  d3.select("#histogram")
    .selectAll(".bar")
    .on("mouseenter", (e, d) => {
      const centre = xScale(d.x0) + (xScale(d.x1) - xScale(d.x0)) / 2;
      const x = Math.max(0, Math.min(centre - histTooltipWidth / 2, innerWidth - histTooltipWidth));
      let y = yScale(d.length) - histTooltipHeight - 6;
      if (y < 0) y = yScale(d.length) + 6;
      showTooltip("tooltip-hist", [`${d.x0} - ${d.x1} kWh`, `${d.length} TV models`], x, y);
    })
    .on("mouseleave", () => hideTooltip("tooltip-hist"));
};