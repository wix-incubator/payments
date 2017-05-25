import { expect } from 'chai';
import * as methods from '../src/methods';


describe('Getting method by country tests', () => {
    it ('returns the expected object when fetching Israel', () => {
        const israeliMethods = methods.getMethodsForCountry('IL');
        expect(israeliMethods).to.have.length.of(3);
    });
});


describe('Locale tests)', () => {
    const i18nGet = (token) => token;
    it ('returns "method_cash_title" for "cash" (method name)', () => {
        expect(methods.getMethodDisplayName(i18nGet, 'cash')).to.equal('method_cash_title');
    });
});
