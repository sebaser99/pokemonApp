
import { Inter } from '@next/font/google'
import {GetStaticProps} from 'next'
import { NextPage } from 'next'
import { Grid } from '@nextui-org/react';
import { MainLayout } from '@/components/layouts';
import { pokeApi } from '../api';
import { PokemonListReponse, SmallPokemon } from '../interfaces';
import { PokemonCard } from '@/components/pokemon';



const inter = Inter({ subsets: ['latin'] })

interface Props {
  pokemons: SmallPokemon[]
}

const  HomePage: NextPage<Props> = ({pokemons})=> {
  return (
    <MainLayout title="Listado de Pokemons">
      <Grid.Container gap={2} justify='flex-start'>
      {
            pokemons.map(pokemon=>(
              <PokemonCard key={pokemon.id} pokemon={pokemon}/>
            ))
          } 
      </Grid.Container>    
    </MainLayout>
  )
}

export const getStaticProps: GetStaticProps = async(ctx) => {
  const {data} = await pokeApi.get<PokemonListReponse>('/pokemon?limit=150')
  // const pokemons = await Promise.all(
  //   data.results.map( async(pokemon) => {
  //     const p = pokemon.url.split('v2').slice(1)
  //     const {data : result} = await pokeApi.get(p[0])
  //     const arr: SmallPokemon = {...pokemon}
  //     arr.id = parseInt(result.id)
  //     arr.image = result.sprites.other.dream_world.front_default 
  //   return arr
  //   })    
  // )
  const pokemons: SmallPokemon[] = data.results.map((pokemon, i) => ({
      ...pokemon,
      id: i + 1,
      image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${i +1}.svg`
  }))

  return {
    props: {
      pokemons
    }
  }
}
export default HomePage