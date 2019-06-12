'use strict';

// Create a server with a host and port
import Server from "./app/lib/frameworks_drivers/webserver/server";

import sequelize from "./app/lib/frameworks_drivers/database";
// Start the server
const start = async () => {

    try {

        await sequelize.sync();
        console.log('Connection to DB has been established successfully.');

    } catch (err) {
        console.error('Unable to connect to the database:', err);
    }

    try {
        const server = new Server();

        console.log('Server running at port:', server.listen(3000));
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
};

start();