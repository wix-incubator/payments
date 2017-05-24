var expect    = require('chai').expect;
var _         = require("lodash");
var gateways  = require("../src/gateways");
var adapters  = require("../src/adapters");


describe("gateways", () => {
    const i18nGet = (token) => token;
    
    describe("getGatewaysForCountry", () => {
        it ('returns the expected object when fetching Israel', () => {
            var israeliGateways = gateways.getGatewaysForCountry("IL");
            expect(israeliGateways).to.have.length.of(4);
        });
    });

    describe("getGatewayById", () => {
        it ('returns the expected object when fetching eway', () => {
            var gateway = gateways.getGatewayById("com.ewaypayments");
            expect(gateway.id).to.equal("com.ewaypayments");
        });
    });

    describe("getGatewayDisplayName", () => {
        it ('returns "gateway_com.braintreegateway_title" for "com.braintreegateway" (gateway name)', () => {
            expect(gateways.getGatewayDisplayName(i18nGet, "com.braintreegateway")).to.equal("gateway_com.braintreegateway_title");
        });
    });

    describe("getGatewayFieldDisplayName", () => {
        it ('returns "gateway_com.braintreegateway_field_merchantId" for Braintree "merchantId" (gateway field)', () => {
            expect(gateways.getGatewayFieldDisplayName(i18nGet, "com.braintreegateway", "merchantId")).to.equal("gateway_com.braintreegateway_field_merchantId");
        });
    });
});