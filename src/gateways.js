import _ from 'lodash';

import authorizeNet from './gateways/net.authorize';
import braintree from './gateways/com.braintreegateway';
import creditguard from './gateways/il.co.creditguard';
import eway from './gateways/com.ewaypayments';
import fatzebra from './gateways/au.com.fatzebra';
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


// Gateways
const gatewaysList = [
    authorizeNet,
    braintree,
    creditguard,
    eway,
    fatzebra,
    mercadopago,
    mercurypay,
    paguelofacil,
    paybox,
    paymentexpress,
    paypal,
    pelecard,
    stripe,
    tranzila,
    worldpayEnterprise
];


export const gateways = _.reduce(gatewaysList, (gateways, gateway) => {gateways[gateway.id] = gateway; return gateways;}, {});

export const getGatewaysForCountry = countryCode => {
    return _(gateways)
        .filter(gateway => _.includes(gateway.countries, countryCode))
        .orderBy('ranking', 'desc')
        .map(gateway => _.omit(gateway, 'countries', 'ranking'))
        .value();
};

export const getGatewayById = gatewayId => _.find(gateways, {'id': gatewayId});

export const getGatewayDisplayName = (i18nGet, gatewayId) => i18nGet(`gateway_${gatewayId}_title`);
export const getGatewayFieldDisplayName = (i18nGet, gatewayId, field) => i18nGet(`gateway_${gatewayId}_field_${field}`);
