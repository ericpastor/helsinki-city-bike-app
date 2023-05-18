const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  departure: {
    type: String,
    required: true,
  },

  return: {
    type: String, 
    required: true,
  },

  departureStationId: {
    type: Number,
    required: true, 
  },

  departureStationName: {
    type: String,
    required: true, 
  },

  returnStationId: {
    type: Number,
    required: true,   
  },

  returnStationName: {
    type: String,
    required: true,  
  },

  coveredDistance: {
    type: Number,
    required: true,
  },

  duration: {
    type: Number,
    required: true, 
  },
  
})



module.exports = mongoose.model('Trip', schema)

