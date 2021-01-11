import { RESTDataSource } from 'apollo-datasource-rest'
import { ByCountry } from './types'

class diseaseAPI extends RESTDataSource {
  constructor() {
    super()
    this.baseURL = 'https://disease.sh'
  }

  async getCasesByCountry(code:string): Promise<ByCountry> {
    let res = await this.get(`/v3/covid-19/countries/${code}`, {strict: true})
    delete res.countryInfo
    return res
  }
}


export default diseaseAPI