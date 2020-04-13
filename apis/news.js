const axios = require('axios');
const baseUrl = 'https://api.smartable.ai/coronavirus/news';

module.exports = {

    getNewsByCountry: (countryISO) => {
        return axios.get(`${baseUrl}/${countryISO}`, {
            headers: {
                'Subscription-Key': '3009d4ccc29e4808af1ccc25c69b4d5d',
            }
        });
    }
};