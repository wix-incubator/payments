var includes = require('lodash/fp/includes');
var omit = require('lodash/fp/omit');
var reduce = require('lodash/fp/reduce');
var find = require('lodash/fp/find');

// Gateways
const gatewaysList = [
    require('./gateways/au.com.fatzebra'),
    require('./gateways/com.braintreegateway'),
    require('./gateways/com.dengionline'),
    require('./gateways/com.ewaypayments'),
    require('./gateways/com.mercadopago'),
    require('./gateways/com.mercurypay'),
    require('./gateways/com.paguelofacil'),
    require('./gateways/com.paybox'),
    require('./gateways/com.paymentexpress'),
    require('./gateways/com.paypal'),
    require('./gateways/com.pelecard'),
    require('./gateways/com.stripe'),
    require('./gateways/com.tranzila'),
    require('./gateways/com.worldpay'),
    require('./gateways/il.co.creditguard'),
    require('./gateways/net.authorize'),
]

export const gateways = reduce((gateways, gateway) => {gateways[gateway.id] = gateway; return gateways}, {})(gatewaysList);

export const getGatewaysForCountry = countryCode => reduce((rc, gateway) => {
	if (includes(countryCode)(gateway.countries)) {
		rc.push(omit('countries')(gateway));
	};
	return rc;
}, [])(gateways);

export const getGatewayById = gatewayId => find({'id': gatewayId})(gateways);

export const getGatewayDisplayName = (i18nGet, gatewayId) => i18nGet(`gateway_${gatewayId}_title`);
export const getGatewayFieldDisplayName = (i18nGet, gatewayId, field) => i18nGet(`gateway_${gatewayId}_field_${field}`);
