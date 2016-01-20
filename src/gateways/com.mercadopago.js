var adapters = require("../adapters.js");

module.exports = {
    id : "com.mercadopago",

    form : [
        {type : "string", name : "clientId"},
        {type : "string", name : "clientSecret"},
    ],

	// @see https://www.about-payments.com/knowledge-base/method/mercadopago#countries
    countries : [
        "AR", "BR", "CL", "CO", "MX", "VE"
    ],
	
	fields: ["holderName", "holderId", "csc"],

    formValuesToMerchant : adapters.simpleFormValuesToMerchant,
    merchantToFormValues : adapters.simpleMerchantToFormValues,
    keyToMerchant        : JSON.parse,
    merchantToKey        : JSON.stringify,
};
