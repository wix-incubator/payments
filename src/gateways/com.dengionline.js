var adapters = require("../adapters.js");

module.exports = {
    id : "com.dengionline",

    form : [
        {type : "string", name : "siteId"},
        {type : "string", name : "salt"},
    ],

    countries : [
        "RU"
    ],
	
	fields: ["holderName", "csc"],

    formValuesToMerchant : adapters.simpleFormValuesToMerchant,
    merchantToFormValues : adapters.simpleMerchantToFormValues,
    keyToMerchant        : JSON.parse,
    merchantToKey        : JSON.stringify,
};
