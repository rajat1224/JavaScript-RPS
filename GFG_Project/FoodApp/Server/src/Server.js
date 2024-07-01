const app = require('./app');
const Database = require('./Db_Config');

const port = 8080;

// IIFE
(async () => {
    try {

        await Database.Create();
        console.log('DB Connection Open');

        app.listen(port, () => {
            console.log(`server running on port ${port}`);
        });
    }
    catch (err) {
        console.error(err);
    }
})();