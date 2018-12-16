# Project Title
---
#### Restaurant Reviews App

## About the project

I incrementally converted a static webpage to a mobile-ready web application. I was given a static design that lacked accessibility and converted the design to be responsive on different sized displays and accessible for screen reader use. I also added a service worker to begin the process of creating a seamless offline experience for the users.

### Specification and Prerequisites

I had to update the code to resolve various issues while still maintaining the included functionality.

### Getting started 

- Download or clone the starter repository.
- cd to the correct project folder
- From inside the new directory, launch a local client server using Python from your terminal: 
   - check the version of python installed: python -v 
   - If Python 2 run: python -m SimpleHTTPServer 8000 
   - If Python 3 run: python3 -m http.server 8000
- Visit the site in your browser at http://localhost:8000

## Leaflet.js and Mapbox:

This repository uses [leafletjs](https://leafletjs.com/) with [Mapbox](https://www.mapbox.com/). 

### Note about ES6

Most of the code in this project has been written to the ES6 JavaScript specification for compatibility with modern web browsers and future-proofing JavaScript code. 

## Technical

This project includes:
 - `CSS folder` containing: styles.css
 - `data folder` containing: restaurants.json
 - `img folder` containing: all the images
 - `js folder` containing: dbhelper.js, main.js, restaurant_info.js
 - `HTML file` index.html
 - `HTML file` restaurant.html
 - `js file` sw.js (service worker file)
 - `README file` README.md
 
## Authors

* **Daniel Lodewikus Meyer** - [MeyerDL](https://github.com/MeyerDL)

## Acknowledgments

* Udacity provided the starter code 
