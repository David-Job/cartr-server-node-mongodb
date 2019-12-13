const Cart = require('../models/Cart.model');

module.exports = require('express')
  .Router()

  .get('/', (req, res) => {
    Cart.find()
      .then((carts) => res.json(carts))
      .catch((err) => res.status(400).json(`Error while finding Carts: ${err}`));
  })

  .get('/:id', (req, res) => {
    Cart.findById(req.params.id)
      .then((cart) => res.json(cart))
      .catch((err) => res.status(400).json(`Error while finding Cart: ${err}`));
  })

  .post('/add', (req, res) => {
    new Cart({
      userId: req.body.userId,
      itemId: req.body.itemId,
      quantity: req.body.quantity,
    })
      .save()
      .then(() => res.json('Successfully added Cart'))
      .catch((err) => res.status(400).json(`Error while adding Cart: ${err}`));
  })

  .put('/:id/update', (req, res) => {
    Cart.findByIdAndUpdate(req.params.id, {
      id_usuario: req.body.id_usuario,
      id_articulo: req.body.id_articulo,
      cantidad: req.body.cantidad,
    })
      .then(() => res.json('Successfully updated Cart'))
      .catch((err) => res.status(400).json(`Error while updating Cart: ${err}`));
  })

  .delete('/:id/delete', (req, res) => {
    Cart.findByIdAndDelete(req.params.id)
      .then(() => res.json('Successfully deleted Cart'))
      .catch((err) => res.status(400).json(`Error while deleting Cart: ${err}`));
  });
