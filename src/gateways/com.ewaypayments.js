var adapters = require("../adapters.js");

module.exports = {
    id : "com.ewaypayments",

    form : [
        {type : "string", name : "customerId"},
        {type : "string", name : "refundPwd"},
    ],

	// @see List of countries in https://eway.io/
    countries : [
        "AU", "GB", "HK", "MY", "NZ", "SG"
    ],

    formValuesToMerchant : adapters.simpleFormValuesToMerchant,
    merchantToFormValues : adapters.simpleMerchantToFormValues,
    keyToMerchant        : JSON.parse,
    merchantToKey        : JSON.stringify,
};
