import { FC } from "react"
import { SmallPokemon } from "@/interfaces"
import { Card, Grid, Row, Text } from "@nextui-org/react"
import { useRouter } from "next/router"

interface Props {
    pokemon: SmallPokemon

}
export const PokemonCard: FC<Props> = ({ pokemon}) => {
    const router = useRouter()

    const goToPokemonDetail = ()=>{
        router.push(`/name/${pokemon.name}`)
    }
  return (
    <Grid onClick={goToPokemonDetail}  xs={6} sm={3} md={2} xl={1}>
        <Card isHoverable isPressable  >
            <Card.Body css={{padding: 1}}>
                <Card.Image src={pokemon.image}   width="100%" height={140}/>
            </Card.Body> 
            <Card.Footer >
                <Row justify="space-between">
                    <Text transform="capitalize">{pokemon.name}</Text>
                    <Text># {pokemon.id}</Text>
                </Row>
            </Card.Footer>  
        </Card>
    </Grid>
  )
}
