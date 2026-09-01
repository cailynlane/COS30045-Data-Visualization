# WattWise Australia — Appliance Energy Consumption Website

A four-page educational website demonstrating semantic HTML, shared navigation, external CSS, vanilla JavaScript interactivity, responsive design, and client-side calculations.

## Required project structure

```text
energy-webpage-v1/
├── css/
│   └── styles.css
├── js/
│   └── scripts.js
├── images/
│   └── PowerIcon.png
├── data/
│   └── data.csv
├── index.html
├── televisions.html
├── about.html
├── calc.html
└── README.md
```

## Pages

- `index.html` — Home page shell, ready for future tutorial content.
- `televisions.html` — Televisions page shell, ready for future tutorial content.
- `about.html` — About Us page shell, ready for future tutorial content.
- `calc.html` — Complete interactive appliance energy and cost calculator.

The Home, Televisions, and About Us pages intentionally contain only the shared navigation and footer so their content can be added during future tutorials. The calculator page has been left fully populated and unchanged.

## Shared features

The navigation appears on every page and includes the PowerIcon logo, links to all four pages, hover states, and an active-page indicator. The calculator validates user input and calculates daily energy consumption, monthly energy consumption, monthly cost, and yearly cost in the browser. `data/data.csv` contains example appliance wattage data for future use or extension.

The visual design is inspired by **1992 retro-computing and early web culture**: CRT scanlines, pixel-style typography, chunky beveled controls, neon cyan, magenta, yellow and blue, arcade-like panels, and a dark computer-screen background.

## Running the site

Open `index.html` in a browser, or use the Live Server extension in Visual Studio Code. No external JavaScript libraries are required. An internet connection may be needed for the decorative Google Fonts import; the site remains usable if the fonts are unavailable.

## Attribution

Footer name: Cailyn Lanelle. GenAI acknowledgement: “GenAI was used”.

> Note: The `images/PowerIcon.png` file included in this package is a temporary power-icon placeholder. Replace it with the provided course PNG while keeping the same filename and location.
