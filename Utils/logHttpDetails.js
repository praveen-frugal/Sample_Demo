const fs = require('fs');
const path = require('path');

const logHttpDetails = (url, requestOptions, response, responseBody) => {
  const logData = {
    url,
    requestOptions,
    responseStatus: response.status,
    responseBody,
  };

  // Append the log data to a file (this will be included in the Jest console logs)
  fs.appendFileSync(path.join(__dirname, 'http-logs.json'), JSON.stringify(logData, null, 2) + '\n');
};

module.exports = { logHttpDetails };
