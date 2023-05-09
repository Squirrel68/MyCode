const config = require("config");
const app = require(`${__dirname}/../apps/app`);

const server = app.listen((port = config.get("app.port")), (req, res) => {
  console.log(`Server running on port ${port}`);
});
// typeof(server) = object
