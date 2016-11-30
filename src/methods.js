var includes = require('lodash/fp/includes');
var reduce = require('lodash/fp/reduce');
var omit = require('lodash/fp/omit');

// Methods
const methodsList = [
    require('./methods/cash'),
    require('./methods/credit'),
    require('./methods/com.cellarix'),
];

const methods = reduce((methods, method) => {methods[method.id] = method; return methods}, {})(methodsList);

export const getMethodsForCountry = countryCode => reduce((rc, method) => {
	if (method.countries === undefined || includes(countryCode)(method.countries)) {
		rc.push(omit('countries')(method));
	};
	return rc;
}, [])(methods);

export const getMethodDisplayName = (i18nGet, methodId) => i18nGet(`method_${methodId}_title`);
