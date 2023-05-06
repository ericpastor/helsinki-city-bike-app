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

  type Query {
    tripsCount: Int!
    allTrips: [Trip!]!
    findTripByDeparture(departureStationName: String!):Trip
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
