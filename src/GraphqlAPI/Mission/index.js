import { gql } from 'apollo-server'
 
export const typeDef = gql`
    type Mission {
        name: String
        missionPatch(size: PatchSize): String
    }

    enum PatchSize {
        SMALL
        LARGE
    }

    type TripUpdateResponse {
        success: Boolean!
        message: String
        launches: [Launch]
    }
`