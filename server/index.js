
const app = require('./app');

const PORT = 3060;

module.exports = app.listen(PORT, () => {
  console.log(`listening on port ${PORT}...`);
});