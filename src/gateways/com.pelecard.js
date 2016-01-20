var adapters = require("../adapters.js");

module.exports = {
    id : "com.pelecard",

    form : [
        {type : "string", name : "terminalNumber"},
        {type : "string", name : "user"},
        {type : "string", name : "password"},
        {type : "string", name : "shopNumber"},
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
