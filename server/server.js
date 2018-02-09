const express = require('express'),
    bodyParser = require('body-parser'),
    cors = require('cors');

    const app = express();
    const port = 3015;

    app.use(cors());
    app.use(bodyParser.json());
    app.use(express.static(`${__dirname}/../build`));

    app.listen(port, () => console.log(`Running on port ${port}`));
