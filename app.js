require('dotenv').config();
const express = require('express');


const app = express();
const port = process.env.EXPRESS_APP_PORT || 3000;
const router = express.Router();


router.get('/', (req, res) => {
  res.json({'message': 'Hello, world!'});
});


app.use(`${process.env.EXPRESS_APP_URL_PREFIX}`, router);

app.listen(port, () => {
  console.log(`Listening in port ${port}`);
});

