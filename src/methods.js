import _ from 'lodash';

import cash from './methods/cash';
import credit from './methods/credit';
import cellarix from './methods/com.cellarix';

// Methods
const methodsList = [
    cash,
    credit,
    cellarix
];
const methods = _.reduce(methodsList, (methods, method) => {methods[method.id] = method; return methods;}, {});

export const getMethodsForCountry = countryCode => {
    return _(methods)
        .filter(method => (_.isUndefined(method.countries) || _.includes(method.countries, countryCode)))
        .map(method => _.omit(method, 'countries'))
        .value();
};

export const getMethodDisplayName = (i18nGet, methodId) => i18nGet(`method_${methodId}_title`);
