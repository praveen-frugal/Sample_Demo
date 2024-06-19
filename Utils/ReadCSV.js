// Utils/readCSV.js
const fs = require('fs');

function readCSVFile(filePath) {
  return new Promise((resolve, reject) => {
    const users = [];
    fs.createReadStream(filePath, { encoding: 'utf-8' })
      .on('data', (chunk) => {
        const lines = chunk.split('\n');
        const headers = lines[0].trim().split(','); // Assuming headers are in the first line
        for (let i = 1; i < lines.length; i++) {
          const fields = lines[i].trim().split(',');
          if (fields.length === headers.length) {
            const userData = {};
            headers.forEach((header, index) => {
              userData[header.trim()] = fields[index].trim();
            });
            users.push(userData);
          }
        }
      })
      .on('end', () => resolve(users))
      .on('error', (error) => reject(error));
  });
}

module.exports = { readCSVFile };
