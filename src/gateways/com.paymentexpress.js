import { simpleFormValuesToMerchant, simpleMerchantToFormValues } from '../adapters.js';

module.exports = {
    id : 'com.paymentexpress',

    form : [
        {type : 'string', name : 'username'},
        {type : 'string', name : 'password'},
    ],

	// @see https://www.paymentexpress.com/Knowledge_Base/Connectivity.aspx
	// @see https://www.paymentexpress.com/Knowledge_Base/Bank_Guides
    countries : [
        'AU', 'BD', 'BN', 'CA', 'GB', 'HK', 'IE', 'IN', 'MO', 'MY',
        'NZ', 'SG', 'US', 'ZA'
    ],
	
	fields: [],

    formValuesToMerchant : simpleFormValuesToMerchant,
    merchantToFormValues : simpleMerchantToFormValues,
    keyToMerchant        : JSON.parse,
    merchantToKey        : JSON.stringify,
};
