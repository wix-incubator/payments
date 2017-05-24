import { simpleFormValuesToMerchant, simpleMerchantToFormValues } from '../adapters';

export default {
    id : 'au.com.fatzebra',

    form : [
        {type : 'string', name : 'username'},
        {type : 'string', name : 'password'},
    ],

    countries : [
        'AU',
    ],
	
	fields: ['holderName'],

    formValuesToMerchant : simpleFormValuesToMerchant,
    merchantToFormValues : simpleMerchantToFormValues,
    keyToMerchant        : JSON.parse,
    merchantToKey        : JSON.stringify
};
