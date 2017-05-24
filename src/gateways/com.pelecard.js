import { simpleFormValuesToMerchant, simpleMerchantToFormValues } from '../adapters';

export default {
    id : 'com.pelecard',

    form : [
        {type : 'string', name : 'terminalNumber'},
        {type : 'string', name : 'user'},
        {type : 'string', name : 'password'},
        {type : 'string', name : 'shopNumber'},
    ],

    countries : [
        'IL',
    ],
	
	fields: [],

    formValuesToMerchant : simpleFormValuesToMerchant,
    merchantToFormValues : simpleMerchantToFormValues,
    keyToMerchant        : JSON.parse,
    merchantToKey        : JSON.stringify,
    
    ranking: 4
};
