var adapters = require("../adapters.js");

module.exports = {
    id : "com.mercadopago",

    form : [
        {type : "string", name : "clientId"},
        {type : "string", name : "clientSecret"},
    ],

    countries : [
        "AR", "BR", "CL", "CO", "MX", "VE"
    ],

    formValuesToMerchant : adapters.simpleFormValuesToMerchant,
    merchantToFormValues : adapters.simpleMerchantToFormValues,
    keyToMerchant        : JSON.parse,
    merchantToKey        : JSON.stringify,
};
