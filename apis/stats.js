const axios = require('axios');
const baseUrl = 'https://corona-virus-stats.herokuapp.com/api/v1/cases/countries-search';

module.exports = {

    getGlobalStats: () => {
        return axios.get(baseUrl, {
            params: {
                limit: 1,
            }
        });
    },

    getStatsByCountry: async (country) => {
        return axios.get(baseUrl, {
            params: {
                search: country,
                limit: 1,
            }
        });
    },

    getAllCountriesStats: async () => {
        return axios.get(baseUrl, {
            params: {
                limit: 300,
                order: 'total_cases',
                how: 'desc',
            }
        });
    }
};