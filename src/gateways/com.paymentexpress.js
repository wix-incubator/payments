var adapters = require("../adapters.js");

module.exports = {
    id : "com.paymentexpress",

    form : [
        {type : "string", name : "username"},
        {type : "string", name : "password"},
    ],

    countries : [
        "AU",
    ],

    formValuesToMerchant : adapters.simpleFormValuesToMerchant,
    merchantToFormValues : adapters.simpleMerchantToFormValues,
    keyToMerchant        : JSON.parse,
    merchantToKey        : JSON.stringify,
};
