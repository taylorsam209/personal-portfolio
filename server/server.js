const express = require('express'),
    bodyParser = require('body-parser'),
    cors = require('cors');

    const app = express();

    app.use(cors());
    app.use(bodyParser.json());
    app.use(express.static(`${__dirname}/../build`));
