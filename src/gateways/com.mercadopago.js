import { simpleFormValuesToMerchant, simpleMerchantToFormValues } from '../adapters';

export default {
    id : 'com.mercadopago',

    form : [
        {type : 'string', name : 'clientId'},
        {type : 'string', name : 'clientSecret'},
        {type : 'country', name : 'countryCode'}
    ],

	// @see https://www.about-payments.com/knowledge-base/method/mercadopago#countries
    countries : [
        'AR', 'BR', 'CL', 'CO', 'MX', 'VE'
    ],
	
	fields: ['holderName', 'holderId', 'csc'],

    formValuesToMerchant : simpleFormValuesToMerchant,
    merchantToFormValues : simpleMerchantToFormValues,
    keyToMerchant        : JSON.parse,
    merchantToKey        : JSON.stringify
};
