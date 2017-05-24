import { braintreeFormValuesToMerchant, braintreeMerchantToFormValues } from '../adapters';

export default {
    id : 'com.braintreegateway',

    form : [
        {type : 'string',   name : 'merchantId'},
        {type : 'string',   name : 'publicKey'},
        {type : 'string',   name : 'privateKey'},
        {type : 'currency', name : 'currency'},
        {type : 'string',   name : 'merchantAccountId'},
    ],

	// @see https://www.braintreepayments.com/country-selection
    countries : [
		'AD', 'AT', 'AU', 'BE', 'BG', 'CA', 'CH', 'CY', 'CZ', 'DE',
		'DK', 'EE', 'ES', 'FI', 'FR', 'GB', 'GG', 'GI', 'GR', 'HK',
		'HR', 'HU', 'IE', 'IM', 'IS', 'IT', 'JE', 'LI', 'LT', 'LU',
		'LV', 'MC', 'MT', 'MY', 'NL', 'NO', 'NZ', 'PL', 'PT', 'RO',
		'SE', 'SG', 'SI', 'SK', 'SM', 'TR', 'US'
    ],

	fields: [],

    formValuesToMerchant : braintreeFormValuesToMerchant,
    merchantToFormValues : braintreeMerchantToFormValues,
    keyToMerchant        : JSON.parse,
    merchantToKey        : JSON.stringify,
    
    ranking: 4
};
