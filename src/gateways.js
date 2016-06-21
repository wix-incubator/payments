import _ from 'lodash';
import locales from './locales';

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


const gateways = _.reduce(gatewaysList, (gateways, gateway) => {gateways[gateway.id] = gateway; return gateways}, {});

export const getGatewaysForCountry = countryCode => _.reduce(gateways, (rc, gateway) => {
	if (_.includes(gateway.countries, countryCode)) {
		rc.push(_.omit(gateway, 'countries'));
	};
	return rc;
}, []);

export const getGatewayDisplayName = (locale, gatewayId) => {
	if (_.has(locales, locale)) {
		const gw = locales[locale].gateways[gatewayId];
		if (gw) {
			return gw.name;
		}
	}
	return '';
};

export const getGatewayFieldDisplayName = (locale, gatewayId, field) => {
	if (_.has(locales, locale)) {
		const gw = locales[locale].gateways[gatewayId];
		if (gw) {
			return gw.form[field];
		}
	}
	return '';
};
