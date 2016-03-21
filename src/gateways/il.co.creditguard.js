var adapters = require("../adapters.js");

module.exports = {
    id : "il.co.creditguard",

    form : [
        {type : "string", name : "user"},
        {type : "string", name : "password"},
        {type : "string", name : "terminalNumber"},
        {type : "string", name : "supplierNumber"}
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
