const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const db = require("./app/models");
db.sequelize.sync();
//const controller = require("./app/controllers/tutorial.controller");

// const run = async () => {

// };

// db.sequelize.sync({ force: true }).then(() => {
//   console.log("Drop and re-sync db.");
//   run();
// });

require('./app/routes/product.routes')(app);

app.listen(3000, () => {
  console.log('Server is running on port ' + 3000);
})