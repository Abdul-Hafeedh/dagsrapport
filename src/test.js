//Required package
var pdf = require("pdf-creator-node");
var fs = require("fs");
var fetch = require('node-fetch');

// Read HTML Template
var html = fs.readFileSync("src/template.html", "utf8");

console.log("ran test")

var weather;

// fetch('https://api.github.com/users/github')
//     .then(res => res.json())
//     .then(json => console.log(json));

    fetch('https://api.openweathermap.org/data/2.5/weather?q=aarhus&units=metric&appid=ebedfc40f7813cab42b35125c5bb33f2')
    .then(res => res.json())
    .then(json => console.log(json))
    .then(json => weather = json);

    // fetch('https://github.com/')
    // .then(result => x.text())
    // .then(textresult => console.log(textresult))

var weather2 = {
        coord: { lon: 10.2108, lat: 56.1567 },
        weather: [
          {
            id: 804,
            main: 'Clouds',
            description: 'overcast clouds',
            icon: '04d'
          }
        ],
        base: 'stations',
        main: {
          temp: 19.59,
          feels_like: 292.94,
          temp_min: 291.45,
          temp_max: 293.27,
          pressure: 1020,
          humidity: 73,
          sea_level: 1020,
          grnd_level: 1019
        },
        visibility: 10000,
        wind: { speed: 2.84, deg: 295, gust: 3.83 },
        clouds: { all: 100 },
        dt: 1624463652,
        sys: {
          type: 2,
          id: 2001568,
          country: 'DK',
          sunrise: 1624415500,
          sunset: 1624479060
        },
        timezone: 7200,
        id: 2624652,
        name: 'Aarhus',
        cod: 200
      }
var users = [
    {
      name: "Shyam",
      age: "26",
      punkt: "detvirker"
    },
    {
      name: "Navjot",
      age: "26",
    },
    {
      name: "Vitthal",
      age: "26",
    },
  ];

  var document = {
    html: html,
    data: {
      pdfusers: users,
      pdfweather: weather2,
    },
    path: "./output/output.pdf",
    type: "",
  };

var options = {
    format: "A4",
    orientation: "portrait",
    border: "10mm",
    header: {
        height: "45mm",
        contents: '<div style="text-align: center;">Daily Newspaper</div>'
    },
    footer: {
        height: "28mm",
        contents: {
            first: 'Cover page',
            2: 'Second page', // Any page number is working. 1-based index
            default: '<span style="color: #444;">{{page}}</span>/<span>{{pages}}</span>', // fallback value
            last: 'Last Page'
        }
    }
};

pdf
  .create(document, options)
  .then((res) => {
    console.log(res);
  })
  .catch((error) => {
    console.error(error);
  });