var adapters = require("../adapters.js");

module.exports = {
    id : "com.paypal",

    form : [
        {type : "string", name : "clientId"},
        {type : "string", name : "secret"},
    ],

	// @see https://developer.paypal.com/docs/integration/direct/rest_api_payment_country_currency_support/#direct-credit-card-payments
    countries : [
        "GB", "US"
    ],
	
	fields: [],

    formValuesToMerchant : adapters.simpleFormValuesToMerchant,
    merchantToFormValues : adapters.simpleMerchantToFormValues,
    keyToMerchant        : JSON.parse,
    merchantToKey        : JSON.stringify,
};
