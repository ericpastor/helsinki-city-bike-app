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
      return await Trip.find({ departureStationName: {$regex: args.departureStationName, "$options": "i"}}).skip(args.offset).limit(args.limit)

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

      return await Station.findOne({ osoite: {$regex: args.osoite, "$options": "i"}})
    },
  },
}

module.exports = resolvers
