require ('dotenv').config()
const {PORT} = process.env
const server = require('./src/app.js');
const { conn } = require('./src/db.js');

// Sincronizando todos los modelos a la vez.
conn.sync({ force: true }).then(() => {
  server.listen(PORT, () => {
    console.log('%s listening at 3001'); 
  });
});
