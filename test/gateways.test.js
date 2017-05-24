import {expect} from 'chai';
import _ from 'lodash';
import * as gateways from '../src/gateways';


describe("gateways", () => {
    const i18nGet = (token) => token;
    
    describe("getGatewaysForCountry", () => {
        it ('returns just the gateways that support the given country', () => {
            const israeliGateways = gateways.getGatewaysForCountry("IL");
            expect(israeliGateways).to.have.length.of(4);
        });

        it ('returns gateways sorted by ranking, in descending order', () => {
            const israeliGateways = gateways.getGatewaysForCountry("IL");
            expect(_.head(israeliGateways).id).to.equal('com.pelecard');
            expect(_.last(israeliGateways).id).to.equal('il.co.leumi-card');
        });

        it ('omits countries and ranking fields', () => {
            const israeliGateways = gateways.getGatewaysForCountry("IL");
            const gateway = _.head(israeliGateways);
            expect(gateway.countries).to.be.undefined;
            expect(gateway.ranking).to.be.undefined;
        });
    });

    describe("getGatewayById", () => {
        it ('returns the expected object when fetching eway', () => {
            const gateway = gateways.getGatewayById("com.ewaypayments");
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