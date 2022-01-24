import React from "react";
import { useCharacter } from "../hooks/useCharacter";
import "./Character.css";


export default function Character() {

    const {data, loading, error } = useCharacter(3);

    console.log({
        data,
        error,
        loading,
    });

    if(loading) return <div>spinner...</div>;
    if(error) return <div>something went wrong</div>;

    return <div classname="Character">
        <img src={data.character.image} width={300} height={300}/>
        <div classname="Character-content">
            <h1>{data.character.name}</h1>
            <p>{data.character.location.name}</p>
        </div>
    </div>;
}