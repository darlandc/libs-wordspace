const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');

const api = express();
const port = 9090;
const router = express.Router();

api.use(cors());

api.use(bodyparser.urlencoded({ extended: true }));
api.use(bodyparser.json({ limit: '20mb', extended: true }));

router.get("/", (req, res) => res.json ({
  message: 'Back-end running!'
}));

api.use("/", router);

api.listen(port);
console.log("Back-end running!");
