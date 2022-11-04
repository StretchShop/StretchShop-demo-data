"use strict";

const origUsers = require("stretchshop/services/users/users.service");

module.exports = {
	name: "users",
	mixins: [origUsers],
};
