import { useQuery, gql } from '@apollo/client'
const GET_CHARACTER = gql `
query GetCharacter($characterId: ID!){
  character(id: $characterId) {
    id
    name
    location {
      name
    }
    image
  }
}
`;

export const useCharacter = (characterId) => {
    const { error, data, loading } = useQuery(GET_CHARACTER, {
        variables: {
            characterId,
        },
    });

    return {
        error,
        data, 
        loading
    }
}