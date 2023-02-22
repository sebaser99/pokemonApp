import { pokeApi } from '@/api'
import { useEffect, useState } from 'react'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { Grid } from '@nextui-org/react'

import confetti from 'canvas-confetti'

import { MainLayout } from '@/components/layouts'
import { PokemonCardDetails } from '@/components/pokemon'
import { Back } from '@/components/ui'
import { Pokemon, PokemonListReponse } from '@/interfaces'
import { getPokemonInfo, localFavorites } from '@/utils'

interface Props {
  pokemon: Pokemon
}
const PokemonByName: NextPage<Props> = ({pokemon}) => {

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
  const {data} = await pokeApi.get<PokemonListReponse>('/pokemon?limit=150')
  const pokemonNames: string[] = data.results.map(pokemon => pokemon.name)
  // const ArrayNames: string[] = []
  //   data.results.map(poke => (
  //     ArrayNames.push(poke.name)
  //   ))
 
  return {
    paths: 
      pokemonNames.map(name =>(
        {params: {name}}
      ))    ,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async({params}) => {
  const {name} = params as {name: string}

  return {
    props: {
      pokemon: await getPokemonInfo(name)
    }
  }
}

export default PokemonByName