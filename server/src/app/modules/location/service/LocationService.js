const _ = require('lodash');
const {
     insidePolygon
} = require('geolocation-utils');
const locations = require('./location.json');


//only for testing purpose
const addressMap = [
 ['Stumpergasse 51, 1060 Vienna', [16.343130, 48.194908]],
 ['Ungargasse 17, Vienna, Austria', [16.387430, 48.202789]],
 ['Linzer Straße 7, Vienna, Austria', [16.267509, 48.150631]],
 ['Bahnhofplatz 1, Linz, Austria', [14.291330, 48.291901]],
 ['Quadenstraße 5, 1200 Vienna', [16.487350, 48.239262]],
 ['Maurer Hauptplatz 7, 1230 Wien, Austria', [16.267509, 48.150631]]
];

const findLatLang = (address) => {
    let latLong = [];
    _.each(addressMap, add => {
        const part_1 = address.split(' ')[0];
        if (add[0].split(' ')[0] == part_1) {
            latLong = add[1];
        }
    });
    return latLong;
};

const findLocationByName = (addressName) => {
    const {features} = locations;
    const latnlong = findLatLang(addressName);
    let result = {found: false, message: 'Not Found'};
    //console.log(features)
    _.each(features, (cor) => {
        try {
            if (insidePolygon(latnlong, cor.geometry.coordinates[0])) {
                result = {found: true, message: cor.properties.Name};
            }
        } catch (e) {
            console.log(e);
        }
    });
    return result;
};

module.exports = {
    findLocationByName,
};
