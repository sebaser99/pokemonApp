import {FC} from 'react'
import NextLink  from 'next/link';
import { Card, Grid, Link, Text } from "@nextui-org/react"

interface Props {
    id: number,
    name: string
  
}

export const FavoriteCardPokemon:FC<Props> = ({id, name}) => {
    
  return (
    <Grid xs={6} sm={3} md={2} xl={1} justify={'center'} >
         <Link href={`/pokemon/${id}`} as={NextLink}>
            <Card isHoverable isPressable>
                <Card.Header css={{display:'flex', justifyContent: 'center'}}><Text transform='capitalize' h3>{name}</Text></Card.Header>
                <Card.Body>
                    <Card.Image width="100%" height={240} alt='poke-fav-image' src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`} />
                </Card.Body> 
            </Card>
        </Link>
        
    </Grid>
)
}
