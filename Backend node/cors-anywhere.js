const corsAnywhere = require('cors-anywhere');
const {corsAnywherePort} = require('./config')

const startCorsAnywhere = () => {
  corsAnywhere.createServer({
    originWhitelist: [], // Allow all origins
  }).listen(corsAnywherePort, () => {
    console.log(`CORS Anywhere server running on port ${corsAnywherePort}`);
  });
};

module.exports = startCorsAnywhere;
