import React, {useState}from "react";
import { Form } from "semantic-ui-react";

function PokemonForm() {
  const[name, setName]= useState('')
  const[hp, setHp] = useState('')
  const[front, setFront] = useState('')
  const[back, setBack] = useState('')

  function handleNameChange(e){
    setName(e.target.value)
  }
  function handleNameChange(e){
    setHp(e.target.value)
  }
  function handleNameChange(e){
    setFront(e.target.value)
  }
  function handleNameChange(e){
    setBack(e.target.value)
  }


  function handleSubmit(e) {
    e.preventDefault()
    console.log(e.target.innerText)
  }

  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={handleSubmit}
      >
        <Form.Group widths="equal">
          <Form.Input onChange= {handleNameChange} fluid label="Name" placeholder="Name" name="name" />
          <Form.Input fluid label="hp" placeholder="hp" name="hp" />
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
