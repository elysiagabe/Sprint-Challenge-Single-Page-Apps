import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacters] = useState([])

  // Set query data later

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios.get("https://cors-anywhere.herokuapp.com/https://rickandmortyapi.com/api/character/")
    .then(response => {
      //console.log(response.data.results);
      setCharacters(response.data.results);
      })
    .catch(err => console.log("There's an error:", err))
  }, []);

  return (
    <section className="character-list">
      {characters.map(character => {
        return (
          <CharacterCard 
            id={character.id}
            imgSrc={character.image}
            name={character.name}
            status={character.status}
            species={character.species}
            gender={character.gender}
            origin={character.origin.name}
            location={character.location.name}
          />
        )
      })}
    </section>
  );
}
