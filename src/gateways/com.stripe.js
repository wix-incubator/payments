var adapters = require("../adapters.js");

module.exports = {
    id : "com.stripe",

    form : [
        {type : "string", name : "apiKey"},
    ],

    countries : [
        "US",
    ],

    formValuesToMerchant : adapters.simpleFormValuesToMerchant,
    merchantToFormValues : adapters.simpleMerchantToFormValues,
    keyToMerchant        : JSON.parse,
    merchantToKey        : JSON.stringify,
};
