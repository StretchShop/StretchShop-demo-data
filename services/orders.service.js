"use strict";

const origOrders = require("stretchshop/services/orders.service");

module.exports = {
	name: "orders",
	mixins: [origOrders],
};
