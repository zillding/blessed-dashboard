/* eslint no-console:0 */

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  console.log('this is a log');
  res.send('log');
});

app.get('/error', (req, res) => {
  console.log('this is an error');
  res.send('error');
});

app.post('/', (req, res) => {
  console.log('Got a POST req!');
  console.log(req.body);
  res.end();
});

const port = 9001;
app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
