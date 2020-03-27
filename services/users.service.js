"use strict";

const origUsers = require("stretchshop/services/users.service");

module.exports = {
	name: "users",
	mixins: [origUsers],
};
