import React, { Fragment, useState }  from 'react';
import { useQuery, gql } from '@apollo/client'
import "./CharacterList.css";
import { useCharacters } from '../hooks/useCharacters';



export default function CharacterList() {

    const {error, loading, data } = useCharacters();
    
    if(loading) return <div>spinner...</div>;
    if(error) return <div>something went wrong</div>;
    return <div className='CharacterList'>
        {data.characters.results.map(character => {
            return <div>
                <img src={character.image}/>
                <h2>{character.name}</h2>
            </div>
        })}
    </div>;
}