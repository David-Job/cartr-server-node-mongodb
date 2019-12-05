const User = require('../models/User.model');

module.exports = require('express').Router()
  .get('/', (req, res) => {
    User.find()
      .then((users) => res.json(users))
      .catch((err) => res.status(400).json(`Error while finding Users: ${err}`));
  })
  .get('/:id', (req, res) => {
    User.findById(req.params.id)
      .then((user) => res.json(user))
      .catch((err) => res.status(400).json(`Error while finding User: ${err}`));
  })
  .post('/add', (req, res) => {
    new User({
      name: req.body.name,
      surname1: req.body.surname1,
      surname2: req.body.surname2,
      address: req.body.address,
      email: req.body.email,
    }).save()
      .then(() => res.json('Successfully added User'))
      .catch((err) => res.status(400).json(`Error while adding User: ${err}`));
  })
  .put('/:id/update', (req, res) => {
    User.findByIdAndUpdate(req.params.id, {
      name: req.body.name,
      surname1: req.body.surname1,
      surname2: req.body.surname2,
      address: req.body.address,
      email: req.body.email,
    })
      .then(() => res.json('Successfully updated User'))
      .catch((err) => res.status(400).json(`Error while updating User: ${err}`));
  })
  .delete('/:id/delete', (req, res) => {
    User.findByIdAndDelete(req.params.id)
      .then(() => res.json('Successfully deleted User'))
      .catch((err) => res.status(400).json(`Error while deleting User: ${err}`));
  });
