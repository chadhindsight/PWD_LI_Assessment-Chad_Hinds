const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.use('/', require('./routes/apt'));
app.use('/', require('./routes/doctor'));
app.use('/', require('./routes/patient'));

app.get('/', (req, res) => res.send('index'));


const PORT = process.env.PORT || 5001;

app.listen(PORT, console.log(`Server started on port ${PORT}`));