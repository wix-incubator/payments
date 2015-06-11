var adapters = require("../adapters.js");

module.exports = {
    id : "com.worldpay",

    form : [
        {type : "string", name : "merchantCode"},
        {type : "string", name : "merchantPassword"},
    ],

    countries : [
        "AU", "GB", "US"
    ],

    formValuesToMerchant : adapters.simpleFormValuesToMerchant,
    merchantToFormValues : adapters.simpleMerchantToFormValues,
    keyToMerchant        : JSON.parse,
    merchantToKey        : JSON.stringify,
};
