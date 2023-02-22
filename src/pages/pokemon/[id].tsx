import {useEffect, useState } from "react";
import { GetStaticProps, NextPage, GetStaticPaths } from "next"

import confetti from 'canvas-confetti'

import { pokeApi } from "@/api";
import { MainLayout } from "@/components/layouts"
import { Pokemon} from "@/interfaces";
import { localFavorites} from "../../utils";
import { Grid, Button } from "@nextui-org/react";
import { PokemonCardDetails } from "@/components/pokemon";
import { Back } from "@/components/ui";
import { getPokemonInfo } from "@/utils/getPokemonInfo";


interface Props {
  pokemon: Pokemon
}

const PokemonPage: NextPage<Props> = ({pokemon}) => {

  const [isFavorite, setIsFavorite] = useState<boolean>(false)

  useEffect(() => {
    const fv = localFavorites.isInFavorites(pokemon.id)
    setIsFavorite(fv)
  }, [pokemon.id])

  const toggleFavorites = () => {
    setIsFavorite(!isFavorite)
    localFavorites.toggleFavorites(pokemon.id)

    if(isFavorite) return;

    confetti({
      zIndex: 999,
      particleCount: 200,
      spread: 200,
      angle: -100,
      origin: {
        x: 1,
        y: 0,
      }
    })
  }

  return (

    <MainLayout title={pokemon.name}>
      <>
        <Grid.Container css={{marginTop: '5px'}} gap={2} >
          <PokemonCardDetails pokemon={pokemon} isFavorite={isFavorite} toggleFavorites={toggleFavorites} />
        </Grid.Container>
        <Back fontSize="30px" padding="30px" />
      </>
      
    </MainLayout>
  )
}

export const getStaticPaths: GetStaticPaths = async(ctx) => {
  const pokemons151 = [...Array(151)].map((value, index)=> ( `${index + 1}`))
  
  return{
    paths: pokemons151.map(id => ({
      params: {id}
    })),
    fallback: false
  }
}


export const getStaticProps: GetStaticProps = async({params}) => {
    const {id} = params as {id: string}
  return {
    props: {
      pokemon: await getPokemonInfo(id)
    }
  }
}



export default PokemonPage