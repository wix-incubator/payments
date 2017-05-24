import { simpleFormValuesToMerchant, simpleMerchantToFormValues } from '../adapters';

export default {
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
    
    ranking: 3
};
