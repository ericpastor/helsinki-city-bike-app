const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  fid: {
    type: Number,
    required: true,
  },
  id: {
    type: Number,
    required: true,
  },
  nimi: {
    type: String,
    required: true,
  },
  namn: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  osoite: {
    type: String,
    required: true,
  },
  adress:{
    type: String,
    required: true,
  },
  kaupunki: {
    type: String,
    
  },
  stad: {
    type: String,
    
  },
  operaattor: {
    type: String,
    required: true,
  },
  kapasiteet: {
    type: Number,
    required: true,
  },
  x: {
    type: String,
    required: true,
  },
  y: {
    type: String,
    required: true,
  },
 
})



module.exports = mongoose.model('Station', schema)
