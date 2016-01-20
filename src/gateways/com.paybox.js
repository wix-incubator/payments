var adapters = require("../adapters.js");

module.exports = {
    id : "com.paybox",

    form : [
        {type : "string", name : "site"},
        {type : "string", name : "rang"},
        {type : "string", name : "cle"},
    ],

    countries : [
        "BE", "FR", "NL"
    ],
	
	fields: ["csc"],

    formValuesToMerchant : adapters.simpleFormValuesToMerchant,
    merchantToFormValues : adapters.simpleMerchantToFormValues,
    keyToMerchant        : JSON.parse,
    merchantToKey        : JSON.stringify,
};
