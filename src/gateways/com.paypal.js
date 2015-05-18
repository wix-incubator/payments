var adapters = require("../adapters.js");

module.exports = {
    id : "com.paypal",

    form : [
        {type : "string", name : "clientId"},
        {type : "string", name : "secret"},
    ],

    countries : [
        "US", "GB", 
    ],

    formValuesToMerchant : adapters.simpleFormValuesToMerchant,
    merchantToFormValues : adapters.simpleMerchantToFormValues,
    keyToMerchant        : JSON.parse,
    merchantToKey        : JSON.stringify,
};
