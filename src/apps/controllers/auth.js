const login = (req, res) => {
  res.send("login");
};
const logout = (req, res) => {
  res.send("logout");
};
module.exports = {
  login,
  logout,
};
