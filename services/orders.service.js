"use strict";

const origOrders = require("stretchshop/services/orders/orders.service");

module.exports = {
	name: "orders",
	mixins: [origOrders],
};
