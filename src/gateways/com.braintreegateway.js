var adapters = require("../adapters");

module.exports = {
    id : "com.braintreegateway",

    form : [
        {type : "string",   name : "merchantId"},
        {type : "string",   name : "publicKey"},
        {type : "string",   name : "privateKey"},
        {type : "currency", name : "currency"},
        {type : "string",   name : "merchantAccountId"},
    ],

    countries : [
        "US",
    ],

    formValuesToMerchant : adapters.braintreeFormValuesToMerchant,
    merchantToFormValues : adapters.braintreeMerchantToFormValues,
    keyToMerchant        : JSON.parse,
    merchantToKey        : JSON.stringify,
};
