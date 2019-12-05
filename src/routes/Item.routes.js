const Item = require('../models/Item.model');

module.exports = require('express').Router()

  .get('/', (req, res) => {
    Item.find()
      .then((items) => res.json(items))
      .catch((err) => res.status(400).json(`Error while finding Items: ${err}`));
  })

  .get('/:id', (req, res) => {
    Item.findById(req.params.id)
      .then((item) => res.json(item))
      .catch((err) => res.status(400).json(`Error while finding Item: ${err}`));
  })

  .post('/add', (req, res) => {
    new Item({
      description: req.body.descripcion,
      brand: req.body.brand,
      price: req.body.price,
      stock: req.body.stock,
    }).save()
      .then(() => res.json('Successfully added Item'))
      .catch((err) => res.status(400).json(`Error while adding Item: ${err}`));
  })

  .put('/:id/update', (req, res) => {
    Item.findByIdAndUpdate(req.params.id, {
      description: req.body.description,
      brand: req.body.brand,
      price: req.body.price,
      stock: req.body.stock,
    })
      .then(() => res.json('Successfully updated Item'))
      .catch((err) => res.status(400).json(`Error while updating Item: ${err}`));
  })

  .delete('/:id/delete', (req, res) => {
    Item.findByIdAndDelete(req.params.id)
      .then(() => res.json('Successfully deleted Item'))
      .catch((err) => res.status(400).json(`Error while deleting Item: ${err}`));
  });
