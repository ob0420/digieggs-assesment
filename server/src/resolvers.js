
module.exports = {
  Query: {

    characters: async (_, __, { dataSources }) => 
      dataSources.characterAPI.getAllCharacters(),
    character: async (_, { id }, { dataSources }) =>
      dataSources.characterAPI.getCharacterById({ id: id }),
    /* filterCharacter: async (_, {id}, {dataSources}) =>
      dataSources.characterAPI.filterCharacters(), */
  }
};

