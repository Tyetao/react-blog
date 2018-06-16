const express = require('express');
const app = express();
const history = require('connect-history-api-fallback');

app.use(history());
app.use(express.static('dist'));

const server = app.listen(3000, () => {
    const host = server.address().address;
    const port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});
