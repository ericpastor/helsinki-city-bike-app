const axios = require( "axios")

const Trip = require('./models/trip')
const Station = require('./models/station')

const resolvers = {
    Query: {
      tripsCount: async () => Trip.collection.countDocuments(),
      allTrips: async (root, args, context) => {
        await 
          
          Trip.collection.updateMany( {},{$rename: {"Departure":"departure", "Return":"return", "Departure station id": "departureStationId", "Departure station name": "departureStationName", "Return station id":"returnStationId", "Return station name":"returnStationName", "Covered distance (m)":"coveredDistance", "Duration (sec)":"duration" }})
       
        if(!args.departureStationName || !args.returnStationName) {

        return await Trip.find({})

      }
      
  
        if(args.departureStationName && args.returnStationName)
        
        return Trip.find({departureStationName: args.departureStationName} && {returnStationName: args.returnStationName})
  
      },
      findTripByDeparture: async (_, args) => {
        return Trip.find({departureStationName: args.departureStationName})
      },

      allStations: async () => {
        await Station.collection.updateMany({}, {$rename: {"FID": "fid", "ID":"id", "Nimi": "nimi", "Namn":"namn", "Name":"name", "Osoite":"osoite", "Adress":"adress", "Kaupunki":"kaupunki", "Stad": "stad", "Operaattor":"operaattor", "Kapasiteet": "kapasiteet" }})

        return await Station.find({})

      },

      findStationByName: async (_, args) => {
        await Station.collection.updateMany({}, {$rename: {"FID": "fid", "ID":"id", "Nimi": "nimi", "Namn":"namn", "Name":"name", "Osoite":"osoite", "Adress":"adress", "Kaupinki":"kaupunki", "Stad": "stad", "Operaattor":"operaattor", "Kapasiteet": "kapasiteet" }})

     return await Station.findOne({name: args.name})
      },
    },
  }
  
  module.exports = resolvers