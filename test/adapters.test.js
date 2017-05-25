import { expect } from 'chai';
import * as adapters from '../src/adapters';

/***** Mock objects for testing the adapter *****/
// Generic object with arbitrary fields
const formValues = {
    'terminalNumber' : 'termnum',
    'user'           : 'username',
    'password'       : 'pwd'
};

const merchant = {
    terminalNumber : 'termnum',
    user           : 'username',
    password       : 'pwd'
};

// Braintree special object
const btFormValues = {
    'merchantId'        : 'merchant identification number',
    'publicKey'         : 'a public key',
    'privateKey'        : 'a private key',
    'currency'          : 'USD',
    'merchantAccountId' : 'some merchant account ID'
};

const btMerchant = {
    merchantId         : 'merchant identification number',
    publicKey          : 'a public key',
    privateKey         : 'a private key',
    merchantAccountIds : {
        'USD' : 'some merchant account ID'
    }
};
/*********************************************/


/*********** Tests ******************/
describe('Adapters', () => {
    it ('returns merchant from form', () => {
        expect(adapters.simpleFormValuesToMerchant(formValues)).to.deep.equal(merchant);
    });
    it ('returns form from merchant', () => {
        expect(adapters.simpleMerchantToFormValues(merchant)).to.deep.equal(formValues);
    });
});

describe('Braintree Adapters', () => {
    it ('returns merchant from form', () => {
        expect(adapters.braintreeFormValuesToMerchant(btFormValues)).to.deep.equal(btMerchant);
    });
    it ('returns form from merchant', () => {
        expect(adapters.braintreeMerchantToFormValues(btMerchant)).to.deep.equal(btFormValues);
    });
});
