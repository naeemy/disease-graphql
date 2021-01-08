import * as http from 'http'

const getCountry = (code: string) => {
  http.get({
    hostname: 'https://disease.sh',
    port: 80,
    path: `/v3/covid-19/countries/{${code}`,
    agent: false,
    headers: { accept: 'application/json'}
  }, (res) => {
    console.log(JSON.stringify(res))
    return res
  });
}

const countryResolvers = {
  Query: {
    country: () => getCountry('TH')
  },
}

export default countryResolvers