var omit = require('lodash/fp/omit');
var head = require('lodash/fp/head');
var entries = require('lodash/fp/entries');
var flow = require('lodash/fp/flow');
var reduce = require('lodash/fp/reduce').convert({ 'cap': false });

// Convert form values received from the UI to a merchant object
export const simpleFormValuesToMerchant = formValues => reduce((merchant, value, name) => {
    merchant[name] = value;
    return merchant;
}, {})(formValues);

// Convert a merchant object to a form that that UI can display
export const simpleMerchantToFormValues = merchant => reduce((formValues, value, name) => {
    formValues[name] = value;
    return formValues;
}, {})(merchant);


/****** Special Braintree handling **********/
export const braintreeFormValuesToMerchant = formValues => {
    const merchant                                 = simpleFormValuesToMerchant(formValues);
    merchant.merchantAccountIds                    = {};
    merchant.merchantAccountIds[merchant.currency] = merchant.merchantAccountId;
    delete merchant.currency;
    delete merchant.merchantAccountId;
    return merchant;
};

export const braintreeMerchantToFormValues = merchant => {
    const formValues                = simpleMerchantToFormValues(omit('merchantAccountIds')(merchant));
    const firstMerchantAccountId    = flow(entries, head)(merchant.merchantAccountIds) || ['', ''];
    formValues['currency']          = firstMerchantAccountId[0];
    formValues['merchantAccountId'] = firstMerchantAccountId[1];
    return formValues;
};
/*******************************************/
