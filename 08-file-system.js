const fs = require('fs');

// Write
fs.writeFileSync('data.txt', 'Hello, filesystem!');

// Read
const content = fs.readFileSync('data.txt', 'utf-8');
console.log(content);
