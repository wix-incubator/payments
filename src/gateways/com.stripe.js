var adapters = require("../adapters.js");

module.exports = {
    id : "com.stripe",

    form : [
        {type : "string", name : "apiKey"},
    ],

	// @see https://stripe.com/global
    countries : [
        "AT", "AU", "BE", "CA", "CH", "DE", "DK", "ES", "FI", "FR",
		"GB", "IE", "JP", "IT", "LU", "MX", "NL", "NO", "SE", "US"
    ],

    formValuesToMerchant : adapters.simpleFormValuesToMerchant,
    merchantToFormValues : adapters.simpleMerchantToFormValues,
    keyToMerchant        : JSON.parse,
    merchantToKey        : JSON.stringify,
};
