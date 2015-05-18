var _        = require("underscore");
var locales  = require("./locales");


var gateways = {
	"com.pelecard"         : require("./gateways/com.pelecard"),
	"com.braintreegateway" : require("./gateways/com.braintreegateway"),
};



module.exports = {
	getGatewaysForCountry : function(countryCode) {
		return _.reduce(gateways, function(rc, gateway, id) {
			if (_.contains(gateway.countries, countryCode)) {
				rc.push(_.omit(gateway, "countries"));
			};
			return rc;
		}, []);
	},

	getGatewayDisplayName : function(locale, gatewayId) {
		if (_.has(locales, locale)) {
			var gw = locales[locale][gatewayId];
			if (gw) {
				return gw.name;
			}
		}
		return "";
	},

	getGatewayFieldDisplayName : function(locale, gatewayId, field) {
		if (_.has(locales, locale)) {
			var gw = locales[locale][gatewayId];
			if (gw) {
				return gw.form[field];
			}
		}
		return "";
	}
};