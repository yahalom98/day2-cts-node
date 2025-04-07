// Run: npm install express
const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => res.send('Hello with Express'));
app.post('/data', (req, res) => res.json({ received: req.body }));

app.listen(3000, () => console.log('Express server on http://localhost:3000'));
