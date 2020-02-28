import React, { useEffect, useState } from "react";
import axios from "axios";
import EpisodeCard from "./EpisodeCard";
import { Container, Row } from "reactstrap";

export default function EpisodeList() {
    const [episodes, setEpisodes] = useState([]);

    useEffect(() => {
        axios.get("https://cors-anywhere.herokuapp.com/https://rickandmortyapi.com/api/episode/")
        .then(response => {
            setEpisodes(response.data.results);
        })
        .catch(err => console.log("There was an error", err));
    }, [])

    return(
        <>
            <Container>
                <Row>
                    {episodes.map(episode => {
                    return (
                        <EpisodeCard 
                        id={episode.id}
                        name={episode.name}
                        date={episode.air_date}
                        />
                    )
                    })}
                </Row>
            </Container>
        </>
    );
}
