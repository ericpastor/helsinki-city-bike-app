const typeDefs = `
  type Trip {
    departure: String!
    return: String!
    departureStationId: Int!
    departureStationName: String!
    returnStationId: Int!
    returnStationName: String!
    coveredDistance: Int!
    duration: Int!
  }

  type Station {
    fid: Int!
    id: Int!
    nimi: String!
    namn: String!
    name: String!,
    osoite: String!
    adress: String!
    kaupunki: String
    stad: String
    operaattor: String
    kapasiteet: Int!
    x: String!
    y: String!
  }

  type Query {
    tripsCount: Int!
    allTrips(offset: Int!, limit: Int!): [Trip!]!
    findTripByDeparture(departureStationName: String!, limit: Int!, offset: Int!):[Trip]!
    allStations: [Station!]!
    findStationByName(name: String!):Station
    
  }
`

module.exports = typeDefs
