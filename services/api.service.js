"use strict";

const origApi = require("stretchshop/services/api.service");

module.exports = {
	name: "api",
	mixins: [origApi],
};
