import { Link, Spacer, Text, useTheme } from '@nextui-org/react'
import Image from 'next/image'
import NextLink from 'next/link'


export const Navbar = () => {
    const {theme} = useTheme()

  return (
    <div style={{
        display: 'flex',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'start',
        padding: '0 20px',
        backgroundColor: theme?.colors.gray300.value
    }}>
        <Image src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png'
            alt='Pokemon Logo' width={70} height={70} 
        ></Image>
       
          <Link href='/' as={NextLink}>
            <Text color='white' h2>P</Text>
            <Text color='white' h3>okemón</Text>
          </Link>
     
        
        <Spacer css={{flex: 1}}/>
        <Link href='/favorites' as={NextLink}>
           <Text h3>Favoritos</Text>
        </Link>
    </div>
  )
}
