const index = (req, res) => {
  res.send("product");
};
const create = (req, res) => {
  res.send("product-create");
};
const edit = (req, res) => {
  res.send("product-edit");
};
const del = (req, res) => {
  res.send("product-delete");
};

module.exports = {
  index,
  create,
  edit,
  del,
};
