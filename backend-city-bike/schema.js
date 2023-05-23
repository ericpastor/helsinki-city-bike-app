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
    allTrips(departureStationName: String): [Trip!]!
    findTripByDeparture(departureStationName: String!):[Trip]!
    allStations: [Station!]!
    findStationByName(name: String!):Station
    
  }
`

module.exports = typeDefs