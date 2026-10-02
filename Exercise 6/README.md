# Exercise 6: Interactive TV Energy Explorer

An interactive page with a histogram and a scatterplot of TV energy consumption.

## Features

- **Histogram:** number of TV models in 150 kWh/year bands (0 to 1800). The one extreme TV above 1800 kWh/year is excluded.
- **Filters:** buttons for screen type (LCD, LED, OLED) and screen size (24, 32, 55, 65, 98 inch). Both charts update with animated transitions.
- **Rescale axis button:** switches the histogram y axis between fixed (bars comparable across filters) and rescaled (small groups easier to read).
- **Scatterplot:** star rating against energy consumption, coloured by screen type, with a legend.
- **Tooltips:** hovering a dot shows brand, model, screen size and type. Hovering a histogram bar shows its energy range and number of models.

## Files

- index.html
- css/base.css, css/visualisation.css
- js/load-data.js: loads and types the data
- js/shared-constants.js: dimensions, colours, scales, bin generator, filter lists
- js/histogram.js, js/scatterplot.js: chart drawing
- js/interactions.js: filters, rescaling and tooltips
- data/tv-data.csv: Ex6_TVdata_withStar.csv from the unit

## Data

The Jan 2026 TV dataset prepared in KNIME (cleaned, with star ratings). Columns used: brand, model, screen technology, screen size, star rating and energy consumption (kWh/year).

## Limitations

Energy values are labelled figures, not measured use. The scatterplot is densely packed, so overlapping dots hide some models. Fixed histogram bins mean the one extreme value is not shown.

## Running the project

Open the folder in VS Code and use Live Server.

## AI Declaration

I used generative AI (Claude) to help with writing segments and debugging the D3 code for the histogram, filters, scatterplot and tooltips, and debug errors. 
