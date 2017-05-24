import { simpleFormValuesToMerchant, simpleMerchantToFormValues } from '../adapters';

export default {
    id : 'il.co.creditguard',

    form : [
        {type : 'string', name : 'user'},
        {type : 'string', name : 'password'},
        {type : 'string', name : 'terminalNumber'},
        {type : 'string', name : 'supplierNumber'},
        {type : 'string', name : 'idPrefix'}
    ],

    countries : [
        'IL',
    ],
	
	fields: [],

    formValuesToMerchant : simpleFormValuesToMerchant,
    merchantToFormValues : simpleMerchantToFormValues,
    keyToMerchant        : JSON.parse,
    merchantToKey        : JSON.stringify,
    
    ranking: 2
};
