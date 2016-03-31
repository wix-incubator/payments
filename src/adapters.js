import _ from 'lodash';

// Convert form values received from the UI to a merchant object
export const simpleFormValuesToMerchant = formValues => _.reduce(formValues, (merchant, value, name) => {
    merchant[name] = value;
    return merchant;
}, {});

// Convert a merchant object to a form that that UI can display
export const simpleMerchantToFormValues = merchant => _.reduce(merchant, (formValues, value, name) => {
    formValues[name] = value;
    return formValues;
}, {});


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
    const formValues                = simpleMerchantToFormValues(_.omit(merchant, 'merchantAccountIds'));
    const firstMerchantAccountId    = _.chain(merchant.merchantAccountIds).pairs().first().value() || ['', ''];
    formValues['currency']          = firstMerchantAccountId[0];
    formValues['merchantAccountId'] = firstMerchantAccountId[1];
    return formValues;
};
/*******************************************/
