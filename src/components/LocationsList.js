import React, { useEffect, useState } from "react";
import axios from "axios";
import LocationCard from "./LocationCard";
import { Container, Row } from "reactstrap";

export default function LocationsList() {
    const [locations, setLocations] = useState([]);

    useEffect(() => {
        axios.get("https://cors-anywhere.herokuapp.com/https://rickandmortyapi.com/api/location/")
        .then(response => {
            setLocations(response.data.results);
        })
        .catch(err => console.log("There was an error", err));
    }, [])

    return(
        <>
            <Container>
                <Row>
                    {locations.map(location => {
                    return (
                        <LocationCard 
                        id={location.id}
                        name={location.name}
                        type={location.type}
                        dimension={location.dimension}
                        />
                    )
                    })}
                </Row>
            </Container>
        </>
    );
}
