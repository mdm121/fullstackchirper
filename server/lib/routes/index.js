"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _chirps = _interopRequireDefault(require("./chirps"));

var _users = _interopRequireDefault(require("./users"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = (0, _express.Router)();
router.use('/chirps', _chirps.default);
router.use('/users', _users.default);
var _default = router;
exports.default = _default;