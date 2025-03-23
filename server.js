const express = require("express");
const bodyParser = require("body-parser");

const port = process.env.PORT || 3000;

const server = express();
server.use(express.static('out'))
server.use(bodyParser.json({ limit: "10mb", extended: true }));
server.use(bodyParser.urlencoded({ limit: "10mb", extended: true }));

server.listen(port, (err) => {
  if (err) throw err;
  console.log(`Ready  on http://localhost:${port}`);
});