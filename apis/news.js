const axios = require('axios');
const baseUrl = 'https://api.smartable.ai/coronavirus/news';

module.exports = {

    getNewsByCountry: (countryISO) => {
        return axios.get(`${baseUrl}/${countryISO}`, {
            headers: {
                'Subscription-Key': '289571b2c6124847bf424982efe43d29',
            }
        });
    }
};