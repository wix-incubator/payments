import { simpleFormValuesToMerchant, simpleMerchantToFormValues } from '../adapters.js';

module.exports = {
    id : 'com.stripe',

    form : [
        {type : 'string', name : 'apiKey'},
    ],

	// @see https://stripe.com/global
    countries : [
        'AT', 'AU', 'BE', 'CA', 'CH', 'DE', 'DK', 'ES', 'FI', 'FR',
		'GB', 'IE', 'JP', 'IT', 'LU', 'MX', 'NL', 'NO', 'SE', 'US'
    ],
	
	fields: [],

    formValuesToMerchant : simpleFormValuesToMerchant,
    merchantToFormValues : simpleMerchantToFormValues,
    keyToMerchant        : JSON.parse,
    merchantToKey        : JSON.stringify,
};
