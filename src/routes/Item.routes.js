const Item = require('../models/Item.model');

module.exports = require('express')
  .Router()

  .get('/', (req, res) => {
    Item.find(req.query)
      .then((items) => res.json(items))
      .catch((err) => res.status(400).json(`Error while finding Items: ${err}`));
  })

  .get('/:id', (req, res) => {
    Item.findById(req.params.id)
      .then((item) => res.json(item))
      .catch((err) => res.status(400).json(`Error while finding Item: ${err}`));
  })

  .post('/add', (req, res) => {
    Item.exists({
      description: req.body.description,
      brand: req.body.brand,
    }).then((t) => {
      if (t) {
        res.status(400).json('Error while adding Item: Duplicate description and brand');
      } else {
        new Item({
          description: req.body.description,
          brand: req.body.brand,
          price: req.body.price,
          stock: req.body.stock,
        })
          .save()
          .then((item) => res.json(item))
          .catch((err) => res.status(400).json(`Error while adding Item: ${err}`));
      }
    });
  })

  .put('/:id/update', (req, res) => {
    Item.findByIdAndUpdate(req.params.id, {
      description: req.body.description,
      brand: req.body.brand,
      price: req.body.price,
      stock: req.body.stock,
    })
      .then((item) => res.json(item))
      .catch((err) => res.status(400).json(`Error while updating Item: ${err}`));
  })

  .delete('/:id/delete', (req, res) => {
    Item.findByIdAndDelete(req.params.id)
      .then((item) => res.json(item))
      .catch((err) => res.status(400).json(`Error while deleting Item: ${err}`));
  });
