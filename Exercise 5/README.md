# Exercise 5: Chart Types in D3

Three charts on one page (televisions.html), each with its own JavaScript file.

## Charts

1. **Vertical bar chart** (js/bar_chart.js): average energy consumption of 55-inch TVs by screen type. LED averages about 369 kWh/year, OLED about 362 and LCD about 335.
2. **Line chart with points** (js/line_chart.js): average Australian electricity spot price from 1998 to 2024, drawn first as a scatter plot and then connected with d3.line().
3. **Donut chart** (js/donut_chart.js): number of small, medium and large TV models, made with d3.pie() and d3.arc().

## Techniques

- Margins and an inner chart group
- Linear and band scales, plus an ordinal colour scale
- Axes, axis labels and value labels
- Line generator, pie and arc generators

## Files

- televisions.html
- css/styles.css
- js/bar_chart.js, js/line_chart.js, js/donut_chart.js
- data/: CSV files for each chart (bar-data.csv, spot-prices.csv, size-counts.csv)

## Data

- Bar chart and donut chart: prepared in KNIME from the TV dataset (filter and GroupBy) and exported as CSV.
- Line chart: ARE spot price data supplied with the unit [add source details if required].

## Running the project

Use Live Server in VS Code so the CSV files load.

## AI Declaration

I used generative AI (Claude) for guidance and debug the chart code. 
