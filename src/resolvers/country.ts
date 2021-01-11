const countryResolvers = {
  Query: {
    async country(_: any, { code }:{ code:string }, { dataSources }:{ dataSources:any } ) {
      return await dataSources.diseaseAPI.getCasesByCountry(code)
    }
  },
}

export default countryResolvers