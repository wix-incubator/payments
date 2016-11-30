import { simpleFormValuesToMerchant, simpleMerchantToFormValues } from '../adapters.js';

module.exports = {
    id : 'com.mercurypay',

    form : [
        {type : 'string', name : 'merchantId'},
        {type : 'string', name : 'password'},
    ],

    countries : [
        'US',
    ],
	
	fields: [],

    formValuesToMerchant : simpleFormValuesToMerchant,
    merchantToFormValues : simpleMerchantToFormValues,
    keyToMerchant        : JSON.parse,
    merchantToKey        : JSON.stringify,
};
