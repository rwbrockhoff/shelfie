const express = require('express');
const bodyParser = require('body-parser');
const controller = require('./controller');
const massive = require('massive');
require('dotenv').config();

const app = express();
app.use(bodyParser.json());

massive( process.env.CONNECTION_STRING ).then( dbInstance => {
    app.set('db', dbInstance)
}).catch( (error) => {
    console.log(error)
})

app.get('/api/inventory', controller.read);
app.post('/api/product', controller.create);

const port = process.env.PORT || 4000;
app.listen(port, () => {console.log(`Listening on port: ${port}`)})

