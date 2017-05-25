import { simpleFormValuesToMerchant, simpleMerchantToFormValues } from '../adapters';

export default {
    id : 'il.co.leumi-card',

    form : [
        {type : 'string', name : 'masof'}
    ],

    countries : [
        'IL',
    ],

    fields: ['holderName', 'holderId', 'csc'],

    formValuesToMerchant : simpleFormValuesToMerchant,
    merchantToFormValues : simpleMerchantToFormValues,
    keyToMerchant        : JSON.parse,
    merchantToKey        : JSON.stringify,

    ranking: 1
};
