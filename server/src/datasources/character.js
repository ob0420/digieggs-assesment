const { RESTDataSource } = require('apollo-datasource-rest');

class CharacterAPI extends RESTDataSource {

    constructor() {
        super();
        this.baseURL = 'https://rickandmortyapi.com/api/';

    }

    
    characterReducer(character) {
        return {
            id: character.id,
            name: character.name,
            location: {
                name: character.location.name
            },
            image: character.image,
        };
    }

    async getAllCharacters() {
        const response = await this.get('character');
        return response;
        /* return Array.isArray(response)
            ? response.map(character => this.characterReducer(character))
            : []; */
    }
    async getCharacterById ({ id }) {
        const data = await this.get(`character/` + 3, { id: id});
        return data;
    }

    async filterCharacters({ id }) {
        return Promise.all(
            characterIds.map(id => this.getCharacterById({ id })),
        );
    }

    
}
module.exports = CharacterAPI;