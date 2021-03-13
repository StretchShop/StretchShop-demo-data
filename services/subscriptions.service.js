"use strict";

const origSubscriptions = require("stretchshop/services/subscriptions.service");

module.exports = {
	name: "subscriptions",
	mixins: [origSubscriptions],
};
