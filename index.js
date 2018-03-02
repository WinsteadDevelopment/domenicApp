const express = require('express');

const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(`${__dirname}/client`));

const port = 9000;

app.listen(port, () => {
  console.log(`App is listening on ${port}`);
});