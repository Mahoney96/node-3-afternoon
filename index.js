require('dotenv').config()
const express = require('express');
const massive = require('massive');

const app = express();

const { SERVER_PORT, CONNECTION_STRING } = process.env;

massive({
    conectionString: CONNECTION_STRING,
    ssl: {rejectUnathorized: false}
})
    .then(dbInstance => {
        app.set("db", dbInstance);
    })
    .catch(err => console.log(err));

app.use(express.json());

app.listen(SERVER_PORt, () => {
    console.log(`Hey Hey, Your Server, Works Today ${SERVER_PORT}.`);
});


