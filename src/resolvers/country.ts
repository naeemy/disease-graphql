import datetimeScalar from '../scalars'

const countryResolvers = {
  DateTime: datetimeScalar,
  Query: {
    async country(_: any, { code }:{ code:string }, { dataSources }:{ dataSources:any } ) {
      return await dataSources.diseaseAPI.getCasesByCountry(code)
    }
  },
}

export default countryResolvers