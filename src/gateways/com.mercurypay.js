var adapters = require("../adapters.js");

module.exports = {
    id : "com.mercurypay",

    form : [
        {type : "string", name : "merchantId"},
        {type : "string", name : "password"},
    ],

    countries : [
        "US",
    ],
	
	fields: [],

    formValuesToMerchant : adapters.simpleFormValuesToMerchant,
    merchantToFormValues : adapters.simpleMerchantToFormValues,
    keyToMerchant        : JSON.parse,
    merchantToKey        : JSON.stringify,
};
