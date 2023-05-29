import { gql } from '@apollo/client'

export const ALL_STATIONS = gql`
  query {
    allStations {
      fid
      id
      nimi
      namn
      name
      osoite
      adress
      kaupunki
      stad
      operaattor
      kapasiteet
      x
      y
    }
  }
`

export const SEARCH_STATION = gql`
  query ($osoite: String!) {
    findStationByName(osoite: $osoite) {
      fid
      id
      nimi
      namn
      name
      osoite
      adress
      kaupunki
      stad
      operaattor
      kapasiteet
      x
      y
    }
  }
`
