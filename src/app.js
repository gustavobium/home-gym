const http = require('http');
const express = require('express');

const routes = require('./routes/routes');
const sequelize = require ('./database/database');

const app = express();
app.use(express.json());
app.use(routes);

sequelize.sync({force: false}).then(() => {
    const port = process.env.PORT || 3000;

    app.set("port", port);

    const server = http.createServer(app);

    server.listen(port);

});