import _ from 'lodash';

import fatzebra from './gateways/au.com.fatzebra';
import braintree from './gateways/com.braintreegateway';
import dengionline from './gateways/com.dengionline';
import eway from './gateways/com.ewaypayments';
import mercadopago from './gateways/com.mercadopago';
import mercurypay from './gateways/com.mercurypay';
import paguelofacil from './gateways/com.paguelofacil';
import paybox from './gateways/com.paybox';
import paymentexpress from './gateways/com.paymentexpress';
import paypal from './gateways/com.paypal';
import pelecard from './gateways/com.pelecard';
import stripe from './gateways/com.stripe';
import tranzila from './gateways/com.tranzila';
import worldpayEnterprise from './gateways/com.worldpay.enterprise';
import creditguard from './gateways/il.co.creditguard';
import leumiCard from './gateways/il.co.leumi-card';
import authorizeNet from './gateways/net.authorize';


// Gateways
const gatewaysList = [
    fatzebra,
    braintree,
    dengionline,
    eway,
    mercadopago,
    mercurypay,
    paguelofacil,
    paybox,
    paymentexpress,
    paypal,
    pelecard,
    stripe,
    tranzila,
    worldpayEnterprise,
    creditguard,
    leumiCard,
    authorizeNet
]


export const gateways = _.reduce(gatewaysList, (gateways, gateway) => {gateways[gateway.id] = gateway; return gateways}, {});

export const getGatewaysForCountry = countryCode => _.reduce(gateways, (rc, gateway) => {
	if (_.includes(gateway.countries, countryCode)) {
		rc.push(_.omit(gateway, 'countries'));
	};
	return rc;
}, []);

export const getGatewayById = gatewayId => _.find(gateways, {'id': gatewayId});

export const getGatewayDisplayName = (i18nGet, gatewayId) => i18nGet(`gateway_${gatewayId}_title`);
export const getGatewayFieldDisplayName = (i18nGet, gatewayId, field) => i18nGet(`gateway_${gatewayId}_field_${field}`);
