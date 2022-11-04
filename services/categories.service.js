"use strict";

const origCategories = require("stretchshop/services/categories/categories.service");

module.exports = {
	name: "categories",
	mixins: [origCategories],
};
