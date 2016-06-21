var GitToI18NGenerator = require('@wix/restaurants-i18n-builder').GitToI18NGenerator;
var path = require('path');
var os = require('os');
var fs = require('fs-extra');
var Q = require('q');
var _ = require('lodash');


Q().then(function() {
    return fs.mkdirsSync(path.join(__dirname, '..', 'resources'));
}).then(function() {
    return GitToI18NGenerator.generate({gitProjectPath : './node_modules/@wix/payments-langs'});
}).then(function(results) {
    // Break down the object into tokens only
    var tokens = {};
    _.each(results, function(data, locale) {
        tokens[locale] = tokens[locale] || {};
        _.each(data.tokens, function(val, key) {
            var parts = key.split('_');
            var obj = tokens[locale];
            key = parts.pop();

            _.each(parts, function(part) {
                obj[part] = obj[part] || {};
                obj = obj[part];
            })

            obj[key] = val;
        });
    });
    return tokens;
}).then(function(tokens) {
    _.each(tokens, function(token, locale) {
        // Massage the data
        token.gateways = token.gateway;
        delete token.gateway;
        _.each(token.gateways, function(data, gateway) {
            data.form = data.field;
            delete data.field;
            data.name = data.title;
            delete data.title;
        });

        token.methods = token.method;
        delete token.method;

        _.each(token.methods, function(data, method) {
            token.methods[method] = data.title;
        });

        // Write the individual locale files
        fs.writeFileSync(path.join(__dirname, '..', 'resources', locale + '.json'), JSON.stringify(token, null, 4), 'utf8');
    });
    return tokens;
}).then(function(tokens) {
    // Generate locales.js which holds all of the locale files
    var fileContent = 'module.exports = {\n';
    _.each(_.keys(tokens), function(locale) {
        fileContent += '    \'' + locale + '\' : require(\'../resources/' + locale + '.json\'),\n';
    });
    fileContent += '};\n';
    fs.writeFileSync(path.join(__dirname, '..', 'src', 'locales.js'), fileContent, 'utf8');
}).then(function() {
    console.log(' - Success.')
}).catch(function(err) {
    console.log('- Error: ', err);
});
