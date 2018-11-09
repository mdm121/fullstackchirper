"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _chirpstore = _interopRequireDefault(require("../chirpstore"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = (0, _express.Router)();
router.get('/:id?', function (req, res) {
  var id = req.params.id;

  if (id) {
    res.send(_chirpstore.default.GetChirp(id));
  } else {
    res.send(_chirpstore.default.GetChirps());
  }
});
router.post('/', function (req, res) {
  _chirpstore.default.CreateChirp(req.body);

  res.sendStatus(200);
});
router.put('/:id?', function (req, res) {
  var id = req.params.id;

  if (id) {
    _chirpstore.default.UpdateChirp(id, req.body);

    res.sendStatus(200);
  } else {
    res.sendStatus(403);
  }
});
router.delete('/:id?', function (req, res) {
  var id = req.params.id;

  if (id) {
    _chirpstore.default.DeleteChirp(id);

    res.sendStatus(200);
  } else {
    res.sendStatus(403);
  }
});
var _default = router;
exports.default = _default;