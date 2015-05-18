var expect   = require('chai').expect;
var _        = require("lodash");
var methods  = require("../src/methods.js");


describe("Getting method by country tests", function() {
    it ('returns the expected object when fetching Israel', function() {
		var israeliMethods = methods.getMethodsForCountry("IL");
		expect(israeliMethods).to.have.length.of(3);
    });
});


describe("English locale tests (en_US)", function() {
    it ('returns "Cash" for "cash" (method name)', function() {
    	expect(methods.getMethodDisplayName("en_US", "cash")).to.equal("Cash");
    });
});

describe("Invalid locale tests (xx_XX)", function() {
    it ('returns empty string for "cash" (method name)', function() {
    	expect(methods.getMethodDisplayName("xx_XX", "cash")).to.equal("");
    });
});
