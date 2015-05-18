var _ = require("lodash");

// Gateways
var gatewaysList = [
    require("./gateways/au.com.fatzebra"),
    require("./gateways/com.braintreegateway"),
    require("./gateways/com.ewaypayments"),
    require("./gateways/com.mercurypay"),
    require("./gateways/com.paybox"),
    require("./gateways/com.paymentexpress"),
    require("./gateways/com.paypal"),
    require("./gateways/com.pelecard"),
    require("./gateways/com.stripe"),
    require("./gateways/com.tranzila"),
    require("./gateways/com.worldpay"),
    require("./gateways/net.authorize"),
]


var locales  = require("./locales");
var gateways = _.reduce(gatewaysList, function(gateways, gateway) {gateways[gateway.id] = gateway; return gateways}, {});


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
			var gw = locales[locale].gateways[gatewayId];
			if (gw) {
				return gw.name;
			}
		}
		return "";
	},

	getGatewayFieldDisplayName : function(locale, gatewayId, field) {
		if (_.has(locales, locale)) {
			var gw = locales[locale].gateways[gatewayId];
			if (gw) {
				return gw.form[field];
			}
		}
		return "";
	}
};
