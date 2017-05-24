import { simpleFormValuesToMerchant, simpleMerchantToFormValues } from '../adapters';

export default {
    id : 'com.paypal',

    form : [
        {type : 'string', name : 'clientId'},
        {type : 'string', name : 'secret'},
    ],

	// @see https://developer.paypal.com/docs/integration/direct/rest_api_payment_country_currency_support/#direct-credit-card-payments
    countries : [
        'CA', 'GB', 'US'
    ],
	
	fields: [],

    formValuesToMerchant : simpleFormValuesToMerchant,
    merchantToFormValues : simpleMerchantToFormValues,
    keyToMerchant        : JSON.parse,
    merchantToKey        : JSON.stringify,
    
    ranking: 1
};
