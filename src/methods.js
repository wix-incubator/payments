import _ from 'lodash';
import locales from './locales';

// Methods
const methodsList = [
    require('./methods/cash'),
    require('./methods/credit'),
    require('./methods/com.cellarix'),
];

const methods = _.reduce(methodsList, (methods, method) => {methods[method.id] = method; return methods}, {});

export const getMethodsForCountry = countryCode => _.reduce(methods, (rc, method) => {
	if (_.isUndefined(method.countries) || _.contains(method.countries, countryCode)) {
		rc.push(_.omit(method, 'countries'));
	};
	return rc;
}, []);

export const getMethodDisplayName = (locale, methodId) => {
	if (_.has(locales, locale)) {
		const method = locales[locale].methods[methodId];
		if (method) {
			return method;
		}
	}
	return '';
};
