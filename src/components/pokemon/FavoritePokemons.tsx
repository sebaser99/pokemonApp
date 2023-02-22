import { Grid } from "@nextui-org/react"
import { FC } from "react"
import { FavoriteCardPokemon } from "./FavoriteCardPokemon"

interface Props {
    pokemons : number[]
}
export const FavoritePokemons: FC<Props> = ({pokemons}) => {
  return (
    <Grid.Container direction="row" justify="flex-start" gap={2}>
              {
                pokemons.map(id => (
                    <FavoriteCardPokemon key={id} id={id}/>
                ))
            }
    </Grid.Container>
    
  )
}
