import { simpleFormValuesToMerchant, simpleMerchantToFormValues } from '../adapters';

export default {
    id : 'com.paguelofacil',

    form : [
        {type : 'string', name : 'cclw'},
    ],

    countries : [
        'PA'
    ],

    fields: ['holderName', 'csc'],

    formValuesToMerchant : simpleFormValuesToMerchant,
    merchantToFormValues : simpleMerchantToFormValues,
    keyToMerchant        : JSON.parse,
    merchantToKey        : JSON.stringify,

    ranking: 3
};
