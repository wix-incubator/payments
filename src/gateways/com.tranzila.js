var adapters = require("../adapters.js");

module.exports = {
    id : "com.tranzila",

    form : [
        {type : "string", name : "username"},
    ],

    countries : [
        "IL",
    ],
	
	fields: [],

    formValuesToMerchant : adapters.simpleFormValuesToMerchant,
    merchantToFormValues : adapters.simpleMerchantToFormValues,
    keyToMerchant        : JSON.parse,
    merchantToKey        : JSON.stringify,
};
