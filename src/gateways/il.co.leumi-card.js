import { simpleFormValuesToMerchant, simpleMerchantToFormValues } from '../adapters.js';

module.exports = {
    id : 'il.co.leumi-card',

    form : [
        {type : 'string', name : 'masof'}
    ],

    countries : [
        'IL',
    ],
	
	fields: ['holderName', 'holderId', 'csc'],

    formValuesToMerchant : simpleFormValuesToMerchant,
    merchantToFormValues : simpleMerchantToFormValues,
    keyToMerchant        : JSON.parse,
    merchantToKey        : JSON.stringify,
};
