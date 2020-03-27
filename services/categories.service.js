"use strict";

const origCategories = require("stretchshop/services/categories.service");

module.exports = {
	name: "categories",
	mixins: [origCategories],
};
