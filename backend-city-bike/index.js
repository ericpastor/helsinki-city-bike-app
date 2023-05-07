import { ApolloServer } from "@apollo/server"
import { startStandaloneServer } from "@apollo/server/standalone"
import axios from "axios"

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
    operaator: String
    kapasiteet: Int!
    x: Int!
    y: Int!
  }

  type Query {
    tripsCount: Int!
    allTrips: [Trip!]!
    findTripByDeparture(departureStationName: String!):Trip
    allStations: [Station!]!
    findStationByName(name: String!):Station
  }
`

const resolvers = {
  Query: {
    tripsCount: async () => {
      const { data: trips } = await axios.get("http://localhost:3001/trips")
      return trips.length
    },
    allTrips: async () => {
      const { data: trips } = await axios.get("http://localhost:3001/trips")
      return trips
    },
    findTripByDeparture: async (root, args) => {
      const { data: trips } = await axios.get("http://localhost:3001/trips")
      const { departureStationName } = args
      return trips.find(
        (trip) => trip.departureStationName === departureStationName
      )
    },
    allStations: async () => {
      const { data: stations } = await axios.get(
        "http://localhost:3001/stations"
      )
      return stations
    },
    findStationByName: async (root, args) => {
      const { data: stations } = await axios.get(
        "http://localhost:3001/stations"
      )
      const { name } = args
      return stations.find((station) => station.name === name)
    },
  },
}

const server = new ApolloServer({
  typeDefs,
  resolvers,
})

startStandaloneServer(server, {
  listen: { port: 4000 },
}).then(({ url }) => {
  console.log(`Server ready at ${url}`)
})
