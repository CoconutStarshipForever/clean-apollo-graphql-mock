import { gql }  from 'apollo-server'
import { merge } from 'lodash';

import { 
    typeDef as Launch, 
    resolvers as launchResolvers,
} from './Launch';

import { 
    typeDef as Mission
} from './Mission';

import { 
    typeDef as Rocket
} from './Rocket';

import { 
    typeDef as User, 
    resolvers as userResolvers,
} from './User';


const Query = gql`
  type Query {
    _empty: String
  }
`
const Mutation = gql`
    type Mutation {
        _empty: String
    }
`

const resolvers = {}


export const Resolver = merge(resolvers, launchResolvers, userResolvers)


export const TypeDefs = [Query, Mutation, Launch, Rocket, Mission, User]


  