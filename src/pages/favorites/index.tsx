import { useEffect, useState } from "react";
import { MainLayout } from "@/components/layouts"
import { NoFavorites } from "@/components/pokemon/NoFavorites";
import { localFavorites } from "@/utils";
import { FavoritePokemons } from "@/components/pokemon/FavoritePokemons";
import { Back } from "@/components/ui";
import { Row } from "@nextui-org/react";
import { Pokemon, PokemonListReponse } from "@/interfaces";
import { pokeApi } from "@/api";

const Favorites = () => {
   const [pokemonsFav, setPokemonsFav] = useState<Pokemon[]>([]) 
    useEffect(() => {
      const pokeId = localFavorites.pokemons()
      const getPoke = async()=>{
        const fetch = await Promise.all(
            pokeId.map( async(id) => {
              const {data} = await pokeApi.get<Pokemon>(`/pokemon/${id}`)
            return data
            })) 
        console.log(fetch)
        setPokemonsFav(fetch)  
      }
    getPoke()
    }, [])
   
  return (
    <MainLayout title="Favorites">
        <>
        <Row justify="flex-end"><Back fontSize="30px" padding="30px" /></Row>
        
        {pokemonsFav.length === 0 
          ? (<NoFavorites />)
          : <FavoritePokemons pokemons={pokemonsFav}/>
        }
        </>
     
    </MainLayout>
  )
}

export default Favorites;