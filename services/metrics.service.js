"use strict";

const origMetrics = require("stretchshop/services/metrics.service");

module.exports = {
	name: "metrics",
	mixins: [origMetrics]
};
