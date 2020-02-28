import React, { useState } from "react";
import { 
  Col, 
  Card, 
  CardImg, 
  CardText, 
  CardBody, 
  CardTitle, 
  Button,
  Modal, 
  ModalHeader, 
  ModalBody 
} from 'reactstrap';

export default function CharacterCard(props) {
  console.log("CharacterCard props:", props)

  const {
    buttonLabel,
    className
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <Col xs="6" md="4">
      <Card key={props.id}>
        <CardImg top width="100%" src={props.imgSrc} alt={props.name}/>
        <CardBody>
          <CardTitle>Name: {props.name}</CardTitle>
          <Button color="danger" onClick={toggle}>{buttonLabel} Learn More</Button>
            <Modal isOpen={modal} toggle={toggle} className={className}>
              <ModalHeader toggle={toggle}>{props.name}</ModalHeader>
              <ModalBody>
                {props.name} is a {props.gender} {props.species} originally from {props.origin}. They are currently {props.status.toLowerCase()} and residing on/in {props.location}.
              </ModalBody>
            </Modal>
          <CardText></CardText>
        </CardBody>
      </Card>
    </Col>
  );
}
