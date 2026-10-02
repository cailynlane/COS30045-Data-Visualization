const width = 900;
const height = 500;
const margin = { top: 30, right: 30, bottom: 60, left: 70 };
const innerWidth = width - margin.left - margin.right;
const innerHeight = height - margin.top - margin.bottom;

const barColor = "#2937a7";
const bodyBackgroundColor = "#101344";

const xScale = d3.scaleLinear();
const yScale = d3.scaleLinear();
let innerChart;
let fullYMax;

const binGenerator = d3.bin()
  .value(d => d.energyConsumption)
  .domain([0, 1800])
  .thresholds(d3.range(150, 1800, 150));

const filters_screen = [
  { id: "all",  label: "All types", isActive: true  },
  { id: "LCD",  label: "LCD",       isActive: false },
  { id: "LED",  label: "LED",       isActive: false },
  { id: "OLED", label: "OLED",      isActive: false }
];

const filters_size = [
  { id: "all", label: "All sizes", isActive: true  },
  { id: "24",  label: "24 in",     isActive: false },
  { id: "32",  label: "32 in",     isActive: false },
  { id: "55",  label: "55 in",     isActive: false },
  { id: "65",  label: "65 in",     isActive: false },
  { id: "98",  label: "98 in",     isActive: false }
];

const selected = { tech: "all", size: "all" };
let rescaleAxis = false;

let innerChartS;
const xScaleS = d3.scaleLinear();
const yScaleS = d3.scaleLinear();

const colorScale = d3.scaleOrdinal()
  .domain(["LCD", "LED", "OLED"])
  .range(["#54e5dc", "#ff4fb3", "#fff36b"]);

const tooltipWidth = 220;
const tooltipHeight = 70;
const histTooltipWidth = 150;
const histTooltipHeight = 52;