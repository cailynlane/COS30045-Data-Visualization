# Exercise 3: Communicating Data Insights

A short data story about TV energy consumption, built as a webpage for Australian households.

## Data Story

**Audience:** Australian households about to buy a new TV who want to keep running costs down. They are not data specialists, so the page uses plain language, two simple charts and short takeaways.

**What they want to know:**
1. Does screen technology affect how much energy a TV uses?
2. How much does screen size affect energy use?
3. What can they do about it when choosing a TV?

**Story structure:**
1. Bar chart: average yearly energy use by screen technology (LCD, LCD (LED), OLED).
2. Scatter plot: screen size against yearly energy use.
3. Practical tips and a link to the energy cost calculator.

**Design choices:** each chart has a caption and a "Key point" box that states the finding in words. Charts have alt text for accessibility.

## About the data

- **Data source:** TV energy consumption dataset supplied for COS30045 [add publisher, URL and download date].
- **Data processing:** done in KNIME. Columns were filtered and rows with missing screen technology were removed. The bar chart uses a GroupBy node (mean energy consumption per screen technology). The scatter plot rounds screen size with a Number Rounder node.
- **Privacy:** the dataset describes products, not people, and has no personal information.
- **Accuracy and limitations:** energy figures are labelled values, not measured real-world use, which depends on settings, content and viewing hours. Averages hide variation within each group, and screen sizes differ between technologies, so the technology comparison is partly affected by size.
- **Ethics:** the bar chart starts at zero so differences are not exaggerated. Findings are described as patterns in the data, not as claims that one technology is always better.

## Pages

- index.html: Home
- televisions.html: the data story
- calc.html: appliance energy and cost calculator
- about.html: About Us

## AI Declaration

I used generative AI (Claude) to help build the website layout, draft page text and write this README. The KNIME workflow and the two charts are my own work. I reviewed and edited all AI-generated content before using it.
