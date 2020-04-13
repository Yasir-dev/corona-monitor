const axios = require('axios');
const baseUrl = 'https://api.thevirustracker.com/free-api';

module.exports = {

    getGlobalStats: () => {
        return axios.get(baseUrl, {
            params: {
                global: 'stats',
            }
        });
    },

    getStatsByCountry: async (countryISO) => {
        return axios.get(baseUrl, {
            params: {
                countryTotal: countryISO,
            }
        });
    },

    getAllCountriesStats: async () => {
        return axios.get(baseUrl, {
            params: {
                countryTotals: 'all',
            }
        });
    }
};