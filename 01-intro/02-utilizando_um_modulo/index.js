const fs = require('fs');

fs.readFile('arquivo.txt', 'utf-8', (err, data) => {
    console.log(data);
});

