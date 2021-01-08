import { gql } from 'apollo-server'

const countryType = gql`
  type Country {
    updated: String
    country: String
    cases: Number
    todayCases: Number
    deaths: Number
    todayDeaths: Number
    recovered: Number
    todayRecovered: Number
    active: Number
    critical: Number
    casesPerOneMillion: Number
    deathsPerOneMillion: Number
    tests: Number
    testsPerOneMillion: Number
    population: Number
    continent: Number
    oneCasePerPeople: Number
    oneDeathPerPeople: Number
    oneTestPerPeople: Number
    activePerOneMillion: Number
    recoveredPerOneMillion: Number
    criticalPerOneMillion: Number
  }
`
export default countryType