import React, { useState } from "react";
import { InputGroup, InputGroupText, InputGroupAddon, Input } from 'reactstrap';


export default function SearchForm(props) {

  console.log("search form props", props)
 
  return (
    <div>
      <InputGroup>
        <InputGroupAddon addonType="prepend">
          <InputGroupText>Search for a Character</InputGroupText>
        </InputGroupAddon>
        <Input 
          type="text"
          value={props.searchTerm}
          onChange={props.handleInputChange}
        />
      </InputGroup>
    </div>
  );
}
