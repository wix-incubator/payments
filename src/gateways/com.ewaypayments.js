import { simpleFormValuesToMerchant, simpleMerchantToFormValues } from '../adapters.js';

module.exports = {
    id : 'com.ewaypayments',

    form : [
        {type : 'string', name : 'customerId'},
        {type : 'string', name : 'refundPwd'},
    ],

	// @see List of countries in https://eway.io/
    countries : [
        'AU', 'GB', 'HK', 'MY', 'NZ', 'SG'
    ],
	
	fields: [],

    formValuesToMerchant : simpleFormValuesToMerchant,
    merchantToFormValues : simpleMerchantToFormValues,
    keyToMerchant        : JSON.parse,
    merchantToKey        : JSON.stringify,
};
