const fs = require('fs');

fs.readFile('./dados.txt', (err, contents) => {
    console.log(err, String(contents))
});

