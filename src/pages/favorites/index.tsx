import { useEffect, useState } from "react";
import { MainLayout } from "@/components/layouts"
import { NoFavorites } from "@/components/pokemon/NoFavorites";
import { localFavorites } from "@/utils";
import { FavoritePokemons } from "@/components/pokemon/FavoritePokemons";
import { Back } from "@/components/ui";
import { Row } from "@nextui-org/react";

const Favorites = () => {
   const [pokemonsFav, setPokemonsFav] = useState<number[]>([]) 
    useEffect(() => {
      setPokemonsFav(localFavorites.pokemons())
      
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