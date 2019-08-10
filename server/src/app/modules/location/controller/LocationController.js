const Promise = require('bluebird');
const locationService = require('../service');

module.exports.findLocation = ({body}) => {
    return new Promise((resolve) => {
        if(!body.name){
            resolve({code: 200, body: {message: 'Please enter address'}});
            return;
        }
        const rsp = locationService.findLocationByName(body.name);
        resolve({code: 200, body: rsp});
    });
};
