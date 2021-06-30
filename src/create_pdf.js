// Required packages
import pdf from 'pdf-creator-node'
import fs from 'fs'

// Read HTML Template
var html = fs.readFileSync("src/template.html", "utf8");

// Create PDF
export function create_pdf (weather){

  // Define document
  var document = {
    html: html,
    data: {
      pdfweather: weather,
    },
    path: "./output/output.pdf",
    type: "",
  };

  // Define options
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

//Create actual pdf
  pdf
  .create(document, options)
  .then((res) => {
    console.log(res);
  })
  .catch((error) => {
    console.error(error);
  });
}


// export {create_pdf as default};
