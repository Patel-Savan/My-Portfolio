const fs = require('fs');
const dotenv = require('dotenv');

dotenv.config();

const envFilePath = './src/assets/runtime-env.js';
const content = `
(function (window) {
  window.__env = window.__env || {};
  window.__env.API_BASE_URL = '${process.env.API_BASE_URL}';
  window.__env.API_EMAILJS_SERVICE_ID = '${process.env.API_EMAILJS_SERVICE_ID}';
  window.__env.API_EMAILJS_TEMPLATE_ID = '${process.env.API_EMAILJS_TEMPLATE_ID}';
  window.__env.API_EMAILJS_USER_ID = '${process.env.API_EMAILJS_USER_ID}';
})(this);
`;



fs.writeFileSync(envFilePath, content);
console.log('runtime-env.js updated with local environment variables.');
