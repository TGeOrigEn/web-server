require('dotenv').config();

const activityRouter = require('./src/routers/activity');
const personRouter = require('./src/routers/person');
const careerRouter = require('./src/routers/career');
const rankRouter = require('./src/routers/rank');

const { SERVER_PORT, SERVER_HOST } = process.env;

const express = require('express');

const app = express();

app.use((_req, res, next) => {

    res.setHeader('Access-Control-Allow-Origin', '*');

    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    res.setHeader('Access-Control-Allow-Credentials', true);

    next();
});

app.use(express.json());

app.use('/api', activityRouter);
app.use('/api', personRouter);
app.use('/api', careerRouter);
app.use('/api', rankRouter);

app.listen(SERVER_PORT, SERVER_HOST, () => console.info('Server started on port ' + SERVER_PORT));
