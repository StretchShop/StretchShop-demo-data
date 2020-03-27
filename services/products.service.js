"use strict";

const origProducts = require("stretchshop/services/products.service");

module.exports = {
	name: "products",
	mixins: [origProducts],
};
