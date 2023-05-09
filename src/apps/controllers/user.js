const index = (req, res) => {
  res.send("user");
};
const create = (req, res) => {
  res.send("user-create");
};
const edit = (req, res) => {
  res.send("user-edit");
};
const del = (req, res) => {
  res.send("user-delete");
};

module.exports = {
  index,
  create,
  edit,
  del,
};
