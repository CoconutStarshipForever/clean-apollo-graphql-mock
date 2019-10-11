import { gql } from "apollo-server";

export const typeDef = gql`
    type Launch {
        id: ID!
        site: String
        mission: Mission
        rocket: Rocket
        isBooked: Boolean!
    }

    extend type Query {
        launches: [Launch]!
        launch(id: ID!): Launch
    }

    extend type Mutation {
        # if false, booking trips failed -- check errors
        bookTrips(launchIds: [ID]!): TripUpdateResponse!

        # if false, cancellation failed -- check errors
        cancelTrip(launchId: ID!): TripUpdateResponse!
    }
`

export const resolvers = {
    Query: {
        launches: (_, __, { dataSources }) =>
            dataSources.launchAPI.getAllLaunches(),
        launch: (_, { id }, { dataSources }) =>
            dataSources.launchAPI.getLaunchById({ launchId: id })
    }
}