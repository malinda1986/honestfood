const Promise = require('bluebird');
const locationService = require('../service');

module.exports.findLocation = ({body}) => {
    return new Promise((resolve) => {
        locationService.findLocationByName()
        .then(r => {
            resolve({code: 200, body: r});
        })
    
       
    });
};
