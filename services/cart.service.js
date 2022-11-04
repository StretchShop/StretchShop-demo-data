"use strict";

const origCart = require("stretchshop/services/cart/cart.service");

module.exports = {
	name: "cart",
	mixins: [origCart],
};
