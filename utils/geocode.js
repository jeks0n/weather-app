const request = require('request');

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.....&limit=1';

    request(url, {json: true}, (error, {body}) => {
        if (error) {
            callback('Unable to connect to location sevices!', undefined);
        } else if (body.features.length === 0) {
            callback('Unable to find location. Try another search.', undefined);
        } else {
            const center = {
                latitude: body.features[0].center[1],
                longitutde: body.features[0].center[0],
                location: body.features[0].place_name
            }
            callback(undefined, center);
        }
    })
};

module.exports = geocode;