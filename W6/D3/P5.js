//Renaming,deleting and checking the file existence

const fs = require("fs");
const path = require("path");

const originalPath = path.join(__dirname, "draft-report.txt");
const renamePath = path.join(__dirname, "final-report.txt");

fs.writeFileSync(originalPath,"Draft report content");
console.log("Does draft-report.text exists?",fs.existsSync(originalPath));

//Rename
fs.renameSync(originalPath,renamePath);
console.log("Does draft-report.text exists?",fs.existsSync(originalPath));

//delete the file
fs.unlinkSync(renamePath);
console.log("Does final-report.text exists?",fs.existsSync(renamePath));
