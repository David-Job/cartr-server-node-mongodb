const Usuario = require('../models/Usuario.model');

module.exports = require('express').Router()
  .get('/', (req, res) => {
    Usuario.find()
      .then((usuarios) => res.json(usuarios))
      .catch((err) => res.status(400).json(`Error al solicitar usuarios: ${err}`));
  })
  .get('/:id', (req, res) => {
    Usuario.findById(req.params.id)
      .then((usuario) => res.json(usuario))
      .catch((err) => res.status(400).json(`Error al solicitar usuario: ${err}`));
  })
  .post('/add', (req, res) => {
    new Usuario({
      nombre: req.body.nombre,
      apellido1: req.body.apellido1,
      apellido2: req.body.apellido2,
      direccion: req.body.direccion,
      email: req.body.email,
    }).save()
      .then(() => res.json('Usuario añadido con éxito'))
      .catch((err) => res.status(400).json(`Error al añadir usuario: ${err}`));
  })
  .put('/:id/update', (req, res) => {
    Usuario.findByIdAndUpdate(req.params.id, {
      nombre: req.body.nombre,
      apellido1: req.body.apellido1,
      apellido2: req.body.apellido2,
      direccion: req.body.direccion,
      email: req.body.email,
    })
      .then(() => res.json('Usuario actualizado con éxito'))
      .catch((err) => res.status(400).json(`Error al actualizar usuario: ${err}`));
  })
  .delete('/:id/delete', (req, res) => {
    Usuario.findByIdAndDelete(req.params.id)
      .then(() => res.json('Usuario eliminado con éxito'))
      .catch((err) => res.status(400).json(`Error al eliminar usuario: ${err}`));
  });
