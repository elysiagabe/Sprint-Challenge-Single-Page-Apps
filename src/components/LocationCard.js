import React from "react";
import { 
  Col, 
  Card, 
  CardText, 
  CardBody, 
  CardTitle, 
} from 'reactstrap';

export default function LocationCard({ id, name, type, dimension }) {
  return (
    <Col xs="6" md="4">
      <Card key={id}>
        <CardBody>
          <CardTitle>Name: {name}</CardTitle>
          <CardText>
            Type: {type} <br />
            Dimension: {dimension}
          </CardText>
        </CardBody>
      </Card>
    </Col>
  );
}
