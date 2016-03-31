import { simpleFormValuesToMerchant, simpleMerchantToFormValues } from '../adapters.js';

module.exports = {
    id : 'com.paguelofacil',

    form : [
        {type : 'string', name : 'cclw'},
    ],

    countries : [
        'PA'
    ],
	
	fields: ['holderName', 'csc'],

    formValuesToMerchant : simpleFormValuesToMerchant,
    merchantToFormValues : simpleMerchantToFormValues,
    keyToMerchant        : JSON.parse,
    merchantToKey        : JSON.stringify,
};
