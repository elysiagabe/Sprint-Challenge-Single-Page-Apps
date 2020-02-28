import React from "react";
import { 
  Col, 
  Card, 
  CardText, 
  CardBody, 
  CardTitle, 
} from 'reactstrap';

export default function EpisodeCard({ id, name, date }) {
  return (
    <Col xs="6" md="4">
      <Card key={id}>
        <CardBody>
          <CardTitle>Name: {name}</CardTitle>
          <CardText>Air Date: {date}</CardText>
        </CardBody>
      </Card>
    </Col>
  );
}
