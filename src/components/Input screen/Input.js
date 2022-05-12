import React, { useState } from 'react'
import styled from "styled-components";

const Container = styled.div`
  padding: 2em;
  width: 50%;
`;
const Suncontainer = styled.div`
  display: grid;
  margin: 1em 0;
`;

const Input = styled.input`
  border: none;
  width: 70%;
  height: 2em;
  margin: 1em 0;
  border-bottom: 1px solid black;
  padding: 10px;

    :focus {
      outline: none;
  }
`;


function Output() {

  const[heading, setHeading] = useState(null)
  const[subheading1, setSubheading1] = useState(null)
  const[subheading2, setSubheading2] = useState(null)

  const onInputChange = (e, val) =>{
  if(val === "heading"){
    setHeading(e.target.value);
    console.log(heading)
  }
  else if(val === "subheading1"){
    setSubheading1(e.target.value)
    console.log(subheading1)
  }
  else{
    setSubheading2(e.target.value)
    console.log(subheading2)
  }

  }

  return (
    <Container>
      <Suncontainer>
        <label>Heading</label>
         <Input onChange={(e)=> onInputChange(e,"heading")}/>
      </Suncontainer>
      <Suncontainer>
        <label>Sub Heading 1</label>
         <Input onChange={(e)=> onInputChange(e,"subheading1")} />
      </Suncontainer>
      <Suncontainer>
        <label>Sub Heading 2</label>
         <Input onChange={(e)=> onInputChange(e,"subheading2")}/>
      </Suncontainer>
    </Container>
  )
}

export default Output