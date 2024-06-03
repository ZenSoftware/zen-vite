import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());

app.get('/hello', (req, res) => {
  res.setHeader('content-type', 'text/json');
  res.send({ message: 'hello' });
});

app.listen(3400, () => {
  console.log('Server started at: http://localhost:3400/hello');
});
