var adapters = require("../adapters.js");

module.exports = {
    id : "com.paguelofacil",

    form : [
        {type : "string", name : "cclw"},
    ],

    countries : [
        "PA"
    ],

    formValuesToMerchant : adapters.simpleFormValuesToMerchant,
    merchantToFormValues : adapters.simpleMerchantToFormValues,
    keyToMerchant        : JSON.parse,
    merchantToKey        : JSON.stringify,
};
