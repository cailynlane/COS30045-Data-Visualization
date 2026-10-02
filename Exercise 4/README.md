# Exercise 4: Introduction to D3

Exercises 4.1 to 4.7. Exercise 4.1 (SVG house and garden) is in its own repository. This repository covers 4.2 to 4.7.

## What I built

- **4.2:** used D3 to change a style, append a paragraph and append an SVG rectangle.
- **4.3:** set up a responsive SVG canvas using a viewBox.
- **4.4:** loaded TV brand counts from a CSV with d3.csv and converted the counts to numbers.
- **4.5:** bound the data to rectangles to draw a basic bar chart.
- **4.6:** added a linear scale (bar length) and a band scale (bar thickness and spacing).
- **4.7:** grouped each bar with its label and added brand names and count values.

The final chart is a horizontal bar chart of the number of TV models per brand.

## Files

- televisions.html: page containing the chart
- js/main.js: D3 code
- css/styles.css: styles, including the responsive-svg-container class
- data/tvBrandCount.csv: brand counts exported from KNIME

## Running the project

Open the project in VS Code and use the Live Server extension. The page must be served over http because D3 cannot load the CSV when opened as a file.

## Data

Brand counts were made in KNIME from the TV dataset using the provided workflow and exported with the CSV Writer. The CSV columns are Brand_Reg and Count(SoldIn), which the code maps to brand and count.

## AI Declaration

I used generative AI (Claude) for step-by-step guidance, to generate the starter SVG house and debug the D3 code. 
