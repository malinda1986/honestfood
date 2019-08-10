const _ = require('lodash');
const kml = require('gtran-kml');
kml.setPromiseLib(require('bluebird'));

//const file = require('./location.kml');

//const json = parser.toJson(file);

const findLocationByName = () => {
    return kml.toGeoJson('location.kml');
};

module.exports = {
    findLocationByName,
};
