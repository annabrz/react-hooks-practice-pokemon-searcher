import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({pokemon}) {
  const cardCompArr= pokemon.map((obj)=>{
    return <PokemonCard {...obj}/>
  })
  return (
    <Card.Group itemsPerRow={6}>

      {cardCompArr}
    </Card.Group>
  );
}

export default PokemonCollection;
