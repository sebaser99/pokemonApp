import { pokeApi } from "@/api"
import { Pokemon } from "@/interfaces"
import { Grid } from "@nextui-org/react"
import { FC, useEffect, useState } from "react"
import { FavoriteCardPokemon } from "./FavoriteCardPokemon"

interface Props {
    pokemons : Pokemon[]
}
export const FavoritePokemons: FC<Props> = ({pokemons}) => {  
  // const [pokes,setPokes] = useState<Pokemon[]>([])

  // useEffect(() => {
  //   const arrPoke: Pokemon[] = []
  //   pokemons.forEach(async(id) => {
  //     const {data} = await pokeApi.get<Pokemon>(`/pokemon/${id}`) 
  //     arrPoke.push(data)
  //     setPokes(arrPoke)
  //   })
   
  // }, [])
    
  return (
    <Grid.Container direction="row" justify="flex-start" gap={2}>
              {
                pokemons.map(pokemon => (
                    <FavoriteCardPokemon key={pokemon.id} id={pokemon.id} name={pokemon.name} />
                ))
            }
    </Grid.Container>
    
  )
}
