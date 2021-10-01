const express = require('express');
const app = express();
const api = require('./routes/index');
const cors = require('cors');
const path = require('path');

app.use(express.static(path.join(__dirname, "..", "public")));

app.use(cors());

app.use('/api', api);

app.listen(5000, () => console.log('Node server is running on port 5000'));