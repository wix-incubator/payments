var adapters = require("../adapters.js");

module.exports = {
    id : "com.paymentexpress",

    form : [
        {type : "string", name : "username"},
        {type : "string", name : "password"},
    ],

	// @see https://www.paymentexpress.com/Knowledge_Base/Connectivity.aspx
	// @see https://www.paymentexpress.com/Knowledge_Base/Bank_Guides
    countries : [
        "AU", "BD", "BN", "CA", "GB", "HK", "IE", "IN", "MO", "MY",
		"SG", "US", "ZA"
    ],

    formValuesToMerchant : adapters.simpleFormValuesToMerchant,
    merchantToFormValues : adapters.simpleMerchantToFormValues,
    keyToMerchant        : JSON.parse,
    merchantToKey        : JSON.stringify,
};
