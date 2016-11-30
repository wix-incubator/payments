var expect    = require('chai').expect;
var _         = require("lodash");
var gateways  = require("../src/gateways.js");
var adapters  = require("../src/adapters.js");


describe("Getting gateway by country tests", function() {
    it ('returns the expected object when fetching Israel', function() {
		var israeliGateways = gateways.getGatewaysForCountry("IL");
		expect(israeliGateways).to.have.length.of(3);
    });
});

describe("Getting gateway by id tests", function() {
	it ('returns the expected object when fetching eway', function() {
		var gateway = gateways.getGatewayById("com.ewaypayments");
		expect(gateway.id).to.equal("com.ewaypayments");
	});
});

describe("Locale tests", function() {
    const i18nGet = (token) => token;
    it ('returns "gateway_com.braintreegateway_title" for "com.braintreegateway" (gateway name)', function() {
    	expect(gateways.getGatewayDisplayName(i18nGet, "com.braintreegateway")).to.equal("gateway_com.braintreegateway_title");
    });

    it ('returns "gateway_com.braintreegateway_field_merchantId" for Braintree "merchantId" (gateway field)', function() {
    	expect(gateways.getGatewayFieldDisplayName(i18nGet, "com.braintreegateway", "merchantId")).to.equal("gateway_com.braintreegateway_field_merchantId");
    });

});
