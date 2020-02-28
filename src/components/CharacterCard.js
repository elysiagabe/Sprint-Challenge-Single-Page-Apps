import React from "react";

export default function CharacterCard(props) {
  console.log("CharacterCard props:", props)

  return (
    <section key={props.id}>
      <img src={props.imgSrc} alt="rick and morty character" />
      <h3>Name: {props.name}</h3>
      {/* <p>Status: {props.status}</p>
      <p>Species: {props.species}</p>
      <p>Gender: {props.gender}</p>
      <p>Maybe Origin: {props.origin}</p>
      <p>Maybe Current Location: {props.location}</p> */}

  <p>{props.name} is a {props.gender} {props.species} originally from {props.origin}. They are currently {props.status.toLowerCase()} and residing on/in {props.location}.</p>
    </section>
  );
}
