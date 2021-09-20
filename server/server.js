const express = require('express');
const app = express();
const api = require('./routes/index');
const cors = require('cors');

app.use(cors());
app.use('/api', api);

app.listen(5000, () => console.log('Node server is running on port 5000'));