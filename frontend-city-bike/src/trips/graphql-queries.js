import { gql } from '@apollo/client'

export const ALL_TRIPS = gql`
  query AllTrips($offset: Int!, $limit: Int!) {
    allTrips(offset: $offset, limit: $limit) {
      departure
      return
      departureStationName
      departureStationId
      returnStationName
      returnStationId
      coveredDistance
      duration
    }
  }
`
export const FILTER_TRIPS = gql`
  query ($departureStationName: String!, $limit: Int!, $offset: Int!) {
    findTripByDeparture(
      departureStationName: $departureStationName
      limit: $limit
      offset: $offset
    ) {
      departure
      return
      departureStationName
      departureStationId
      returnStationName
      returnStationId
      coveredDistance
      duration
    }
  }
`
