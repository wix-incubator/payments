var adapters = require("../adapters.js");

module.exports = {
    id : "net.authorize",

    form : [
        {type : "string", name : "login"},
        {type : "string", name : "transactionKey"},
    ],

    countries : [
        "US",
    ],

    formValuesToMerchant : adapters.simpleFormValuesToMerchant,
    merchantToFormValues : adapters.simpleMerchantToFormValues,
    keyToMerchant        : JSON.parse,
    merchantToKey        : JSON.stringify,
};
