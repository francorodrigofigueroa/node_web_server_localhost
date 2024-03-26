const { envs } = require('./config/env')
const {startServer}=require('./server/server')




const main = () => {
  startServer({
    port: envs.PORT,
    public_path: envs.PUBLIC_PATH
  })
};

// Funcion agnostica autoconvocada
// Agnostica porque no tiene NOmbre
// autoconvocada porque la ejecuatamos con los parentesis que tiene al ultimo
(async () => {
  main();
})();
