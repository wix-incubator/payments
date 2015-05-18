var adapters = require("../adapters.js");

module.exports = {
    id : "au.com.fatzebra",

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
