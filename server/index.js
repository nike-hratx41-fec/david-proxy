const express = require('express');
const bodyParser = require('body-parser');
const port = 3000;

const app = express();

app.use(express.static('./public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// enter routes below

app.get('/', (req, res) => {
    res.send("GET request");
});


app.listen(port, () => { console.log(`Proxy server is now listening on port',  ${port}`) });