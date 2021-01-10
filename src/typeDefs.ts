import { gql } from 'apollo-server'

const typeDefs = gql`

  type Query {
    country(code: String): Country
  }

  type Country {
    updated: String
    country: String
    cases: Int
    todayCases: Int
    deaths: Int
    todayDeaths: Int
    recovered: Int
    todayRecovered: Int
    active: Int
    critical: Int
    casesPerOneMillion: Int
    deathsPerOneMillion: Int
    tests: Int
    testsPerOneMillion: Int
    population: Int
    continent: Int
    oneCasePerPeople: Int
    oneDeathPerPeople: Int
    oneTestPerPeople: Int
    activePerOneMillion: Int
    recoveredPerOneMillion: Int
    criticalPerOneMillion: Int
  }
`
export default [typeDefs]