import _ from 'lodash';

// Methods
const methodsList = [
    require('./methods/cash'),
    require('./methods/credit'),
    require('./methods/com.cellarix'),
];

const methods = _.reduce(methodsList, (methods, method) => {methods[method.id] = method; return methods}, {});

export const getMethodsForCountry = countryCode => _.reduce(methods, (rc, method) => {
	if (_.isUndefined(method.countries) || _.includes(method.countries, countryCode)) {
		rc.push(_.omit(method, 'countries'));
	};
	return rc;
}, []);

export const getMethodDisplayName = (i18nGet, methodId) => i18nGet(`method_${methodId}_title`);
