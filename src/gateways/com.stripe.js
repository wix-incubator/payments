import { simpleFormValuesToMerchant, simpleMerchantToFormValues } from '../adapters';

export default {
    id : 'com.stripe',

    form : [
        {type : 'string', name : 'apiKey'},
    ],

    // @see https://stripe.com/global
    countries : [
        'AT', 'AU', 'BE', 'BR', 'CA', 'CH', 'DE', 'DK', 'ES', 'FI',
        'FR', 'GB', 'HK', 'IE', 'IT', 'JP', 'LU', 'MX', 'NL', 'NO',
        'NZ', 'PT', 'SE', 'SG', 'US'
    ],
	
    fields: [],

    formValuesToMerchant : simpleFormValuesToMerchant,
    merchantToFormValues : simpleMerchantToFormValues,
    keyToMerchant        : JSON.parse,
    merchantToKey        : JSON.stringify
};
