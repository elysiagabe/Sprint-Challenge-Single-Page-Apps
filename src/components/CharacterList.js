import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";
import { Container, Row } from "reactstrap";
import SearchForm from "./SearchForm.js";

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacters] = useState([])

  // Set query data later
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios.get("https://cors-anywhere.herokuapp.com/https://rickandmortyapi.com/api/character/")
    .then(response => {
      //console.log(response.data.results);
      // filters response data
      const searchResults = response.data.results.filter(character => character.name.toLowerCase().includes(searchTerm.toLowerCase()));
      // set characters to filter data
      setCharacters(searchResults);
      })
    .catch(err => console.log("There's an error:", err))
  }, [searchTerm]);

  // handle input change
  const handleInputChange = e => {
    setSearchTerm(e.target.value)
  }

  return (
    <>
    <SearchForm searchTerm={searchTerm} handleInputChange={handleInputChange} />
    <Container>
      <Row>
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
      </Row>
    </Container>
    </>
  );
}
