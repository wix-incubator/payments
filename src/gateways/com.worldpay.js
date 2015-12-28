var adapters = require("../adapters.js");

module.exports = {
    id : "com.worldpay",

    form : [
        {type : "string", name : "merchantCode"},
        {type : "string", name : "merchantPassword"},
    ],

    countries : [
        "BE", "CH", "DE", "DK", "ES", "FI", "FR", "GB", "HK", "IE",
        "IT", "LU", "NL", "NO", "SE", "SG", "US"
    ],

    formValuesToMerchant : adapters.simpleFormValuesToMerchant,
    merchantToFormValues : adapters.simpleMerchantToFormValues,
    keyToMerchant        : JSON.parse,
    merchantToKey        : JSON.stringify,
};
