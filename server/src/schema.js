const { gql } = require('apollo-server');

const typeDefs = gql `
    
    type Characters {
      results: [Character]
    }  

    type Character {
        id: ID
        name: String
        location: Location
        status: String
        image: String
    }
    
    type Location {
      name: String
    } 

    type Query {
      characters: Characters!
      character(id: ID!): Character
    }

    input FilterCharacter{
      id: ID
      name: String
      status: String
      type: String
    }

`;

module.exports = typeDefs;