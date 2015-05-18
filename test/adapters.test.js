var expect   = require('chai').expect;
var _        = require("underscore");
var adapters = require("../src/adapters.js");

/***** Mock objects for testing the adapter *****/
// Generic object with arbitrary fields
var formValues = {
    "terminalNumber" : "termnum",
    "user"           : "username",
    "password"       : "pwd",
};

var merchant = {
	terminalNumber : "termnum",
	user           : "username",
	password       : "pwd",
};

// Braintree special object
var btFormValues = {
    "merchantId"        : "merchant identification number",
    "publicKey"         : "a public key",
    "privateKey"        : "a private key",
    "currency"          : "USD",
    "merchantAccountId" : "some merchant account ID",       
};


var btMerchant = {
	merchantId         : "merchant identification number",
	publicKey          : "a public key",
	privateKey         : "a private key",
	merchantAccountIds : {
		"USD" : "some merchant account ID"
	},
};
/*********************************************/


/*********** Tests ******************/
describe("Adapters", function() {
    it ('returns merchant from form', function() {
        expect(adapters.simpleFormValuesToMerchant(formValues)).to.deep.equal(merchant);
    });
    it ('returns form from merchant', function() {
        expect(adapters.simpleMerchantToFormValues(merchant)).to.deep.equal(formValues);
    });
});

describe("Braintree Adapters", function() {
    it ('returns merchant from form', function() {
        expect(adapters.braintreeFormValuesToMerchant(btFormValues)).to.deep.equal(btMerchant);
    });
    it ('returns form from merchant', function() {
        expect(adapters.braintreeMerchantToFormValues(btMerchant)).to.deep.equal(btFormValues);
    });
});