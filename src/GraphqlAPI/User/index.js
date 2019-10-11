import {gql} from 'apollo-server'

export const typeDef = gql`
    type User {
        id: ID!
        email: String!
        trips: [Launch]!
    }

    extend type Query{
        # Queries for the current user
        me: User
    }

    extend type Mutation{
        login(email: String): String # login token
    }
`

export const resolver = {
    Query: {
        me: (_, __, { dataSources }) => dataSources.userAPI.findOrCreateUser()
    }
}