import { simpleFormValuesToMerchant, simpleMerchantToFormValues } from '../adapters.js';

module.exports = {
    id : 'com.tranzila',

    form : [
        {type : 'string', name : 'username'},
    ],

    countries : [
        'IL',
    ],
	
	fields: [],

    formValuesToMerchant : simpleFormValuesToMerchant,
    merchantToFormValues : simpleMerchantToFormValues,
    keyToMerchant        : JSON.parse,
    merchantToKey        : JSON.stringify,
};
