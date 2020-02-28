import React from "react";
import { Col, Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

export default function CharacterCard(props) {
  console.log("CharacterCard props:", props)

  return (
    <Col xs="6" md="4">
      <Card key={props.id}>
        <CardImg top width="100%" src={props.imgSrc} alt={props.name}/>
        <CardBody>
          <CardTitle>Name: {props.name}</CardTitle>
          <CardText>{props.name} is a {props.gender} {props.species} originally from {props.origin}. They are currently {props.status.toLowerCase()} and residing on/in {props.location}.</CardText>
        </CardBody>
      </Card>
    </Col>
  );
}
