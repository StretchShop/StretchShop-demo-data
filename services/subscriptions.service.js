"use strict";

const origSubscriptions = require("stretchshop/services/subscriptions/subscriptions.service");

module.exports = {
	name: "subscriptions",
	mixins: [origSubscriptions],
};
