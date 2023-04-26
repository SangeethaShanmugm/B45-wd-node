const fs = require("fs");

const quote = "No beauty shines brighter that that of a good heart!!!🥳🥳";

// fs.writeFile("./awesome.csv", quote, (err) => {
//   console.log("Completed writing awesome.html");
// });

// const data = "Hello Everyone";
// fs.writeFile("./index.html", data, (err) => {
//   console.log("Completed writing index.html");
// });

const quote2 = "Live more, worry less🥳🥳";

//Task 1
//Create the below files with quote2 as the content
// /backup/
// text-1.html
// text-2.html
// text-3.html
// ....
// text-10.html

// for (let i = 1; i <= 10; i++) {
//   fs.writeFile(`./backup/text-${i}.html`, quote2, (err) => {
//     console.log(`Completed writing text-${i}.html`);
//   });
// }

const quote3 = "Good Day everyone";
//Task-2
//node fs.js 20 -> 20 files needs to be create in backup folder -> note-1.html, note-2.html....note-30.html

// const [,,noOfFiles] = process.argv;
// console.log(noOfFiles)
// for (let i = 1; i <= noOfFiles; i++) {
//   fs.writeFile(`./backup/note-${i}.html`, quote3, (err) => {
//     console.log(`Completed writing note-${i}.html`);
//   });
// }

// fs.readFile("./cool123.txt", "utf-8", (err, data) => {
//   if (err) {
//     console.log("Error ❌", err);
//   }
//   console.log("The content of the file is:", data);
// });

// const niceQuote = "\nMake everyday a little less ordinarily🥳";
// fs.appendFile("./nice.txt", niceQuote, (err) => {
//   console.log("Completed writing nice.txt");
// });

// fs.unlink("./toRemove.txt", (err) => {
//   console.log("Successfully removed");
// });

// fs.readdir("./backup", (err, files) => {
//   console.log("All file names", files);
// });

//Task  - Delete all files in backup folder

// fs.readdir("./backup", (err, data) => {
//   // console.log(data);
//   data.forEach((fileName) => {
//     fs.unlink(`./backup/${fileName}`, (err) => {
//       console.log("Successfully deleted!!!  ", fileName);
//     });
//   });
// });

//writeFile => CallStack => WebApi(whoever finishes writing first) => CallBack Q -> CallStack

// writeFile, readFile, appendFile - async
// writeFileSync, readFileSync, appendFileSync - sync

const [, , noOfFiles] = process.argv;
console.log(noOfFiles);
for (let i = 1; i <= noOfFiles; i++) {
  fs.writeFileSync(`./backup/note-${i}.html`, quote3);
  console.log(`Completed writing note-${i}.html`, i);
}
