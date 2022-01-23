const { RESTDataSource } = require('apollo-datasource-rest');

class CharacterAPI extends RESTDataSource {

    constructor() {
        super();
        this.baseURL = 'https://rickandmortyapi.com/api/';

    }

    
    characterReducer(character) {
        return {
            id: characters.results.id || 0,
            name: character.name,
            location: {
                name: character.location.name
            },
            status: character.status,
        };
    }

    async getAllCharacters() {
        const response = await this.get('character');
        return response;
        /* return Array.isArray(response)
            ? response.map(character => this.characterReducer(character))
            : []; */
    }
    async getCharacterById ({ character }) {
        const response = await this.get('character', { id: id});
        return response;
    }

    getCharactersByIds({ characterIds }) {
        return Promise.all(
            characterIds.map(characterId => this.getCharacterById({ characterId })),
        );
    }

    
}
module.exports = CharacterAPI;