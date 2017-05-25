import { simpleFormValuesToMerchant, simpleMerchantToFormValues } from '../adapters';

export default {
    id : 'com.ewaypayments',

    form : [
        {type : 'string', name : 'customerId'},
    ],

	// @see List of countries in https://eway.io/ (though some countries are not supported by the API version we use)
    countries : [
//        'AU', 'HK', 'MY', 'NZ', 'SG'
        'AU'
    ],

    fields: [],

    formValuesToMerchant : simpleFormValuesToMerchant,
    merchantToFormValues : simpleMerchantToFormValues,
    keyToMerchant        : JSON.parse,
    merchantToKey        : JSON.stringify,

    ranking: 3
};
