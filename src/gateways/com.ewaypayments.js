var adapters = require("../adapters.js");

module.exports = {
    id : "com.ewaypayments",

    form : [
        {type : "string", name : "customerId"},
        {type : "string", name : "refundPwd"},
    ],

    countries : [
        "AU",
    ],

    formValuesToMerchant : adapters.simpleFormValuesToMerchant,
    merchantToFormValues : adapters.simpleMerchantToFormValues,
    keyToMerchant        : JSON.parse,
    merchantToKey        : JSON.stringify,
};
