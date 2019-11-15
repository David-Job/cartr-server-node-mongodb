const Carrito = require('../models/Carrito.model');

module.exports = require('express').Router()
  .get('/', (req, res) => {
    Carrito.find()
      .then((carritos) => res.json(carritos))
      .catch((err) => res.status(400).json(`Error al solicitar Carritos: ${err}`));
  })
  .get('/:id', (req, res) => {
    Carrito.findById(req.params.id)
      .then((carrito) => res.json(carrito))
      .catch((err) => res.status(400).json(`Error al solicitar Carrito: ${err}`));
  })
  .post('/add', (req, res) => {
    new Carrito({
      id_usuario: req.body.id_usuario,
      id_articulo: req.body.id_articulo,
      cantidad: req.body.cantidad,
    }).save
      .then(() => res.json('Carrito añadido con éxito'))
      .catch((err) => res.status(400).json(`Error al añadir Carrito: ${err}`));
  })
  .put('/:id/update', (req, res) => {
    Carrito.findByIdAndUpdate(req.params.id, {
      id_usuario: req.body.id_usuario,
      id_articulo: req.body.id_articulo,
      cantidad: req.body.cantidad,
    })
      .then(() => res.json('Carrito actualizado con éxito'))
      .catch((err) => res.status(400).json(`Error al actualizar Carrito: ${err}`));
  })
  .delete('/:id/delete', (req, res) => {
    Carrito.findByIdAndDelete(req.params.id)
      .then(() => res.json('Carrito eliminado con éxito'))
      .catch((err) => res.status(400).json(`Error al eliminar Carrito: ${err}`));
  });
