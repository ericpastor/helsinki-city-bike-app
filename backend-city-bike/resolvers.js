const Trip = require('./models/trip')
const Station = require('./models/station')

const resolvers = {
  Query: {
    tripsCount: async () => Trip.collection.countDocuments(),
    allTrips: async (root, { offset, limit }, context) => {
      await Trip.collection.updateMany({},
        {
          $rename: {
            Departure: 'departure',
            Return: 'return',
            'Departure station id': 'departureStationId',
            'Departure station name': 'departureStationName',
            'Return station id': 'returnStationId',
            'Return station name': 'returnStationName',
            'Covered distance (m)': 'coveredDistance',
            'Duration (sec)': 'duration',
          },
        }
      )

      return await Trip.find({}).skip(offset).limit(limit)
    },

    findTripByDeparture: async (_, args, context) => {
      await Trip.collection.updateMany({},
        {
          $rename: {
            Departure: 'departure',
            Return: 'return',
            'Departure station id': 'departureStationId',
            'Departure station name': 'departureStationName',
            'Return station id': 'returnStationId',
            'Return station name': 'returnStationName',
            'Covered distance (m)': 'coveredDistance',
            'Duration (sec)': 'duration',
          },
        }
      )

      const { departureStationName, limit, offset } = args
      const trips = await Trip.find({}).skip(offset).limit(limit)

      return trips.filter(
        (a) =>
          a.departureStationName.toLowerCase() ==
          departureStationName.toLowerCase()
      )
    },

    allStations: async () => {
      await Station.collection.updateMany({},
        {
          $rename: {
            FID: 'fid',
            ID: 'id',
            Nimi: 'nimi',
            Namn: 'namn',
            Name: 'name',
            Osoite: 'osoite',
            Adress: 'adress',
            Kaupunki: 'kaupunki',
            Stad: 'stad',
            Operaattor: 'operaattor',
            Kapasiteet: 'kapasiteet',
          },
        }
      )

      return await Station.find({})
    },

    findStationByName: async (_, args) => {
      await Station.collection.updateMany({},
        {
          $rename: {
            FID: 'fid',
            ID: 'id',
            Nimi: 'nimi',
            Namn: 'namn',
            Name: 'name',
            Osoite: 'osoite',
            Adress: 'adress',
            Kaupinki: 'kaupunki',
            Stad: 'stad',
            Operaattor: 'operaattor',
            Kapasiteet: 'kapasiteet',
          },
        }
      )

      return await Station.findOne({ osoite: {$regex: args.osoite.toLowerCase().split(" ", 4).join(" "), "$options": "i"}})
    },
  },
}

module.exports = resolvers
