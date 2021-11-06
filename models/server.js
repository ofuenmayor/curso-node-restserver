const express = require('express')
const cors = require('cors')

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.usuariosPath = '/api/usuarios';

    //Middlewares
    this.middlewares();

    //routes
    this.routes();
  }

  routes() {
    this.app.use(this.usuariosPath, require('../routes/user'));
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`servidor corriendo en el puerto ${this.port}`);
    });
  }

  middlewares() {

    this.app.use(cors());

    this.app.use(express.json());

    //Directorio publico
    this.app.use(express.static('public'));
  }
}

module.exports = Server;
