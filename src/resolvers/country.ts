import * as http from 'http'

const getCountry = (code: string) => {
  http.get({
    hostname: 'disease.sh',
    port: 80,
    path: `/v3/covid-19/countries/${code}`,
    agent: false,
    headers: { accept: 'application/json'}
  }, (res) => {
    console.log(res)
    return res
  }).on('error', (e) => {
    console.error(`Got error: ${e.message}`);
  });
}

const countryResolvers = {
  Query: {
    country: (TH:string) => getCountry('TH')
  },
}

export default countryResolvers