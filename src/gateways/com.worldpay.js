import { simpleFormValuesToMerchant, simpleMerchantToFormValues } from '../adapters.js';

module.exports = {
    id : 'com.worldpay',

    form : [
        {type : 'string', name : 'merchantCode'},
        {type : 'string', name : 'merchantPassword'},
    ],

    countries : [
        'BE', 'CH', 'DE', 'DK', 'ES', 'FI', 'FR', 'GB', 'HK', 'IE',
        'IT', 'LU', 'NL', 'NO', 'SE', 'SG', 'US'
    ],
	
	fields: [],

    formValuesToMerchant : simpleFormValuesToMerchant,
    merchantToFormValues : simpleMerchantToFormValues,
    keyToMerchant        : JSON.parse,
    merchantToKey        : JSON.stringify,
};
