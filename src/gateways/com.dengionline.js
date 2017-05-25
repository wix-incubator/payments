import { simpleFormValuesToMerchant, simpleMerchantToFormValues } from '../adapters';

export default {
    id : 'com.dengionline',

    form : [
        {type : 'string', name : 'siteId'},
        {type : 'string', name : 'salt'},
    ],

    countries : [
        'RU'
    ],

    fields: ['holderName', 'csc'],

    formValuesToMerchant : simpleFormValuesToMerchant,
    merchantToFormValues : simpleMerchantToFormValues,
    keyToMerchant        : JSON.parse,
    merchantToKey        : JSON.stringify,

    ranking: 2
};
