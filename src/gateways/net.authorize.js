import { simpleFormValuesToMerchant, simpleMerchantToFormValues } from '../adapters';

export default {
    id : 'net.authorize',

    form : [
        {type : 'string', name : 'login'},
        {type : 'string', name : 'transactionKey'},
    ],

	// @see http://www.authorize.net/international/
    countries : [
        'AD', 'AT', 'AU', 'BE', 'BG', 'CA', 'CH', 'CY', 'CZ', 'DE',
		'DK', 'ES', 'FI', 'FR', 'GB', 'GI', 'GR', 'HU', 'IE', 'IT',
		'LI', 'LU', 'MC', 'MT', 'NL', 'NO', 'NZ', 'PL', 'PT', 'RO',
		'SE', 'SI', 'SK', 'SM', 'US', 'VA'
    ],
	
	fields: [],

    formValuesToMerchant : simpleFormValuesToMerchant,
    merchantToFormValues : simpleMerchantToFormValues,
    keyToMerchant        : JSON.parse,
    merchantToKey        : JSON.stringify
};
