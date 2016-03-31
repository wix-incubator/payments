import { simpleFormValuesToMerchant, simpleMerchantToFormValues } from '../adapters.js';

module.exports = {
    id : 'com.dengionline',

    form : [
        {type : 'string', name : 'siteId'},
        {type : 'string', name : 'salt'},
    ],

    countries : [
        'RU'
    ],
	
	fields: ['holderName', 'csc'],

    formValuesToMerchant : simpleFormValuesToMerchant,
    merchantToFormValues : simpleMerchantToFormValues,
    keyToMerchant        : JSON.parse,
    merchantToKey        : JSON.stringify,
};
