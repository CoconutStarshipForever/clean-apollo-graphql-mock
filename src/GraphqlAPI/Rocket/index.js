import {gql} from 'apollo-server'

export const typeDef = gql`
    type Rocket {
        id: ID!
        name: String
        type: String
    }
`