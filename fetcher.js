// it should take two command line arguments
// 1. a url
// 2. a local file path

//Utilize request library
const request = require('request');

//Utilize file system
const fs = require('fs');

//Utilize readline for inputs
// const readline = require ('readline')
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });


let fileSize;

// Attempt at stretch portion
// let fileNames = fs. readdirSync('./')

// console.log(fileNames[(process.argv[3]).substring(2)])

// if (fileNames[index.html]) {
//   rl.question("There is already a file with that name. Press Y to overwrite or anything else to quit", (answer) => {
//     if (answer !== 'y') {
//     rl.close(); 
//     }
//   })
// }

// to take a command line argument for the url

request(process.argv[2], (error, response, body) => {
  if(error) {
    console.error(error);
  }
  fileSize = body.length;
  fs.writeFile(process.argv[3], body, err => {
    if (err) {
      console.error(err)
    }
    console.log(`Downloaded and saved ${fileSize} bytes to ${process.argv[3]}`)
  })
});


// > node fetcher.js http://www.example.edu/ ./index.html    - Example Input
// Downloaded and saved 3261 bytes to ./index.html           - Example Output