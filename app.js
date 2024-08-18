import express from 'express';


const app = express();
const port = 3000;

app.listen(PORT, () => {
  console.log('Listening in port', port);
});

