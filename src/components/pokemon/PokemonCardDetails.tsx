import { FC } from "react"
import { Button, Card, Container, Grid, Image, Text } from "@nextui-org/react"

import { Pokemon } from "@/interfaces"

interface Props {
    pokemon: Pokemon ,
    isFavorite: boolean,
    toggleFavorites : ()=> void

}

export const PokemonCardDetails: FC<Props> = ({pokemon, isFavorite, toggleFavorites}) => {
  return (
    <>
        <Grid xs={12} sm={4}>
            <Card isHoverable css={{padding: '30px'}}>
            <Card.Body>
                <Card.Image  src={pokemon.sprites.other?.dream_world.front_default || "./noImage.png"}
                    alt={pokemon.name}
                    width='100%'
                    height={200}
                />
                <Text size={20}>poke #  <span>{pokemon.id}</span></Text>
            </Card.Body>
            </Card>
        </Grid>
        <Grid xs={12} sm={8}>
            <Card>
            <Card.Header css={{display:'flex', justifyContent:'space-between'}}>
                <Text h1 transform="capitalize">{pokemon.name}</Text>
                <Button bordered={!isFavorite} onPress={toggleFavorites} color='gradient'>{isFavorite ? 'Favorito' : 'Guardar en Favoritos'}</Button>
            </Card.Header>
            <Card.Body>
                <Text size={30}>Sprites:</Text>
                <Container display="flex" direction="row">
                <Image src={pokemon.sprites.front_default} alt={pokemon.name}  />
                <Image  src={pokemon.sprites.back_default} alt={pokemon.name} />
                <Image  src={pokemon.sprites.front_shiny} alt={pokemon.name} />
                <Image  src={pokemon.sprites.back_shiny} alt={pokemon.name} />
                </Container>
            
            </Card.Body>
            </Card>
        </Grid>
    </>
   
  )
}
