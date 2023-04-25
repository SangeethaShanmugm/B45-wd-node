const fs = require("fs");

const quote = "No beauty shines brighter that that of a good heart!!!🥳🥳";

fs.writeFile("./awesome.csv", quote, (err) => {
  console.log("Completed writing awesome.html");
});
