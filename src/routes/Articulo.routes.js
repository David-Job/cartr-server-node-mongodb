const Articulo = require('../models/Articulo.model');

module.exports = require('express').Router()
  .get('/', (req, res) => {
    Articulo.find()
      .then((articulos) => res.json(articulos))
      .catch((err) => res.status(400).json(`Error al solicitar Articulos: ${err}`));
  })
  .get('/:id', (req, res) => {
    Articulo.findById(req.params.id)
      .then((articulo) => res.json(articulo))
      .catch((err) => res.status(400).json(`Error al solicitar Articulo: ${err}`));
  })
  .post('/add', (req, res) => {
    new Articulo({
      descripcion: req.body.descripcion,
      marca: req.body.marca,
      precio: req.body.precio,
      stock: req.body.stock,
    }).save()
      .then(() => res.json('Articulo añadido con éxito'))
      .catch((err) => res.status(400).json(`Error al añadir articulo: ${err}`));
  })
  .put('/:id/update', (req, res) => {
    Articulo.findByIdAndUpdate(req.params.id, {
      descripcion: req.body.descripcion,
      marca: req.body.marca,
      precio: req.body.precio,
      stock: req.body.stock,
    })
      .then(() => res.json('Articulo actualizado con éxito'))
      .catch((err) => res.status(400).json(`Error al actualizar articulo: ${err}`));
  })
  .delete('/:id/delete', (req, res) => {
    Articulo.findByIdAndDelete(req.params.id)
      .then(() => res.json('Articulo eliminado con éxito'))
      .catch((err) => res.status(400).json(`Error al eliminar aticulo: ${err}`));
  });
