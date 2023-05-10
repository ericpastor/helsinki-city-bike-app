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
    x: String!
    y: String!
  }

  type Query {
    tripsCount: Int!
    allTrips(offset: Int, limit: Int!, departureStationName: String, returnStationName: String): [Trip!]!
    findTripByDeparture(departureStationName: String!):Trip
    allStations(offset: Int, limit: Int!): [Station!]!
    findStationByName(name: String!):Station
  }
`

const resolvers = {
  Query: {
    tripsCount: async () => {
      const { data: trips } = await axios.get("http://localhost:3001/trips")
      return trips.length
    },
    allTrips: async (_, {offset, limit, departureStationName, returnStationName}) => {
      const { data: trips } = await axios.get("http://localhost:3001/trips")
     
      if(!departureStationName || !returnStationName)
      return trips.slice(offset, limit + offset)

      if(departureStationName && returnStationName)
      return (trips.slice(offset, limit + offset).filter((t)=>{
        return (
          t.departureStationName === departureStationName && t.returnStationName === returnStationName
        )
      })
)


    },
    findTripByDeparture: async (_, args) => {
      const { data: trips } = await axios.get("http://localhost:3001/trips")
      const { departureStationName } = args
      return trips.find(
        (trip) => trip.departureStationName === departureStationName
      )
    },
    allStations: async (_, {offset, limit}) => {
      const { data: stations } = await axios.get(
        "http://localhost:3001/stations"
      )
      return stations.slice(offset, limit + offset)
    },
    findStationByName: async (_, args) => {
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
