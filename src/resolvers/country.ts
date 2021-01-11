import * as https from 'https'

const getCountry = (code: string): Promise<object> => {
  return new Promise((resolve, reject) => {
      https.get({
      hostname: 'disease.sh',
      port: 443,
      path: `/v3/covid-19/countries/${code}`,
      agent: false,
      headers: { accept: 'application/json'}
    }, (res) => {
      let data = ''

      // called when a data chunk is received.
      res.on('data', (chunk) => {
        data += chunk;
      });

      // called when the complete response is received.
      res.on('end', () => {
        try {
          const parsedData = JSON.parse(data);
          resolve(parsedData);
        } catch (e) {
          reject(e.message);
        }
      });
    }).on('error', (e) => {
      reject(`Got error: ${e.message}`);
    });
  });
}

const countryResolvers = {
  Query: {
    country: async (TH:string) => await getCountry('TH')
  },
}

export default countryResolvers