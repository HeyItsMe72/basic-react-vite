import React, { useState, useEffect } from 'react';

export default function AjaxHooks() {
    const [pokemons, setPokemons] = useState([]);

    useEffect(()=>{
        let pokemonList = [];
        const getPokemons = async (url) => {
            let res = await fetch(url),
            json = await res.json(); 
            
            json.results.forEach(async el => {
                let res = await fetch(el.url),
                json = await res.json();

                let pokemon = {
                    id: json.id,
                    name: json.name,
                    avatar: json.sprites.front_default
                }

                pokemonList = [...pokemonList, pokemon]
                // console.log(pokemonList)
                setPokemons(pokemons => [...pokemonList]);
            });
        }; getPokemons("https://pokeapi.co/api/v2/pokemon/");
    }, [])

    return(
        <>
        <h2>Async Requests Hooks Components</h2>
        {pokemons.length === 0 ?
        <h3>Cargando...</h3>
        : (pokemons.map((el)=><Pokemon key={el.id} avatar={el.avatar} name={el.name}/>))}
        </>
    )
}

function Pokemon({name, avatar}) {
    return(
        <figure>
            <img src={avatar} alt={name} />
        </figure>
    )
}