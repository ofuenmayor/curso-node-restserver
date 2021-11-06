const {response, request} = require('express');

const usuariosGet = (req = request, res = response) => {
  const {q,ape, nom = "no name"} = req.query;
  res.json({
    msg: "get API - controller",
    q,
    ape,
    nom
  });
}

const usuariosPost = (req, res= response) => {

  const {nombre, edad} = req.body;

  res.status(201).json({
    msg: "post Api - controller",
    nombre,
    edad
  });
}

const usuariosPut = (req, res= response) => {

  const {id} = req.params;

  res.status(201).json({
    msg: "put Api - controller",
    id
  });
}

const usuariosPatch = (req, res= response) => {
  res.status(201).json({
    msg: "patch Api - controller"
  });
}

const usuariosDelete = (req, res= response) => {
  res.status(201).json({
    msg: "delete Api - controller"
  });
}

module.exports = {
  usuariosGet,
  usuariosPost,
  usuariosPut,
  usuariosPatch,
  usuariosDelete
}
