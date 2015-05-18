var _ = require("lodash");

// Methods
var methodsList = [
    require("./methods/cash"),
    require("./methods/credit"),
    require("./methods/com.cellarix"),
]

var locales  = require("./locales");
var methods = _.reduce(methodsList, function(methods, method) {methods[method.id] = method; return methods}, {});


module.exports = {
	getMethodsForCountry : function(countryCode) {
		return _.reduce(methods, function(rc, method, id) {
			if (_.isUndefined(method.countries) || _.contains(method.countries, countryCode)) {
				rc.push(_.omit(method, "countries"));
			};
			return rc;
		}, []);
	},

	getMethodDisplayName : function(locale, methodId) {
		if (_.has(locales, locale)) {
			var method = locales[locale].methods[methodId];
			if (method) {
				return method;
			}
		}
		return "";
	},
};
