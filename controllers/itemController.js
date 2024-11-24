const Item = require('../models/item');

// Get all items
exports.getItems = async (req, res) => {
  const items = await Item.find();
  res.render('index', { items });
};

// Render create form
exports.getCreateForm = (req, res) => {
  res.render('create');
};

// Create item
exports.createItem = async (req, res) => {
  const { name, description } = req.body;
  await Item.create({ name, description });
  res.redirect('/');
};

// Render edit form
exports.getEditForm = async (req, res) => {
  const item = await Item.findById(req.params.id);
  res.render('edit', { item });
};

// Update item
exports.updateItem = async (req, res) => {
  const { name, description } = req.body;
  await Item.findByIdAndUpdate(req.params.id, { name, description });
  res.redirect('/');
};

// Delete item
exports.deleteItem = async (req, res) => {
  await Item.findByIdAndDelete(req.params.id);
  res.redirect('/');
};
