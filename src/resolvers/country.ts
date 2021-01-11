import * as https from 'https'
import { ByCountry } from './types'

const getCountry = (code: string): Promise<ByCountry> => {
  return new Promise((resolve, reject) => {
      https.get({
      hostname: 'disease.sh',
      port: 443,
      path: `/v3/covid-19/countries/${code}?strict=true`,
      agent: false,
      headers: { accept: 'application/json'}
    }, (res) => {
      let data = ''

      // called when a data chunk is received.
      res.on('data', (chunk) => {
        data += chunk
      });

      // called when the complete response is received.
      res.on('end', () => {
        try {
          const parsedData = JSON.parse(data)
          console.log(parsedData)
          delete parsedData.countryInfo // remove unneeded field
          resolve(parsedData)
        } catch (e) {
          reject(e.message);
        }
      });
    }).on('error', (e) => {
      reject(`Got error: ${e.message}`)
    });
  });
}

const countryResolvers = {
  Query: {
    async country(_: any, { code }:{ code:string } ) { return await getCountry(code) }
  },
}

export default countryResolvers