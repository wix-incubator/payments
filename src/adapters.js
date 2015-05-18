var _ = require("lodash");

// The simple functions are outside of the exports because they can't be referenced from within
// Looking at you, Braintree....


// Convert form values received from the UI to a merchant object
function simpleFormValuesToMerchant(formValues) {
    return _.reduce(formValues, function(merchant, value, name) {
        merchant[name] = value;
        return merchant;
    }, {});
}

// Convert a merchant object to a form that that UI can display
function simpleMerchantToFormValues(merchant) {
    return _.reduce(merchant, function(formValues, value, name) {
        formValues[name] = value;
        return formValues;
    }, {});
}


module.exports = {
    simpleFormValuesToMerchant : simpleFormValuesToMerchant,

    simpleMerchantToFormValues : simpleMerchantToFormValues,

    /****** Special Braintree handling **********/
    braintreeFormValuesToMerchant : function(formValues) {
        var merchant                                   = simpleFormValuesToMerchant(formValues);
        merchant.merchantAccountIds                    = {};
        merchant.merchantAccountIds[merchant.currency] = merchant.merchantAccountId;
        delete merchant.currency;
        delete merchant.merchantAccountId;
        return merchant;
    },

    braintreeMerchantToFormValues : function(merchant) {
        var formValues                  = simpleMerchantToFormValues(_.omit(merchant, "merchantAccountIds"));
        var firstMerchantAccountId      = _.chain(merchant.merchantAccountIds).pairs().first().value() || ["", ""];
        formValues["currency"]          = firstMerchantAccountId[0];
        formValues["merchantAccountId"] = firstMerchantAccountId[1];
        return formValues;
    },
    /*******************************************/
};
