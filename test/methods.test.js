var expect   = require('chai').expect;
var _        = require("lodash");
var methods  = require("../src/methods.js");


describe("Getting method by country tests", function() {
    it ('returns the expected object when fetching Israel', function() {
		var israeliMethods = methods.getMethodsForCountry("IL");
		expect(israeliMethods).to.have.length.of(3);
    });
});


describe("Locale tests)", function() {
    const i18nGet = (token) => token;
    it ('returns "method_cash_title" for "cash" (method name)', function() {
    	expect(methods.getMethodDisplayName(i18nGet, "cash")).to.equal("method_cash_title");
    });
});
