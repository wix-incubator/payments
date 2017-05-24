import { simpleFormValuesToMerchant, simpleMerchantToFormValues } from '../adapters';

export default {
    id : 'com.paybox',

    form : [
        {type : 'string', name : 'site'},
        {type : 'string', name : 'rang'},
        {type : 'string', name : 'cle'},
    ],

    countries : [
        'BE', 'FR', 'NL'
    ],
	
	fields: ['csc'],

    formValuesToMerchant : simpleFormValuesToMerchant,
    merchantToFormValues : simpleMerchantToFormValues,
    keyToMerchant        : JSON.parse,
    merchantToKey        : JSON.stringify
};
