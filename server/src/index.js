
const express = require('express');
const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema');
const resolvers = require('./resolvers');
const CharacterAPI = require('./datasources/character');


const server = new ApolloServer({ 
    typeDefs, 
    resolvers,
    dataSources: () => {
        return {
            characterAPI: new CharacterAPI(),
        };
    }, 
});

server.listen().then(() => {
    console.log(`
        Server ıs running!
        Listening on port 4000
        Explore at kdfskjdsf
        `);
});