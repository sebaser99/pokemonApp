import  Head  from 'next/head'
import { FC, ReactNode } from 'react'
import { Navbar } from '../ui'

interface Props {
    children: JSX.Element,
    title: string
}
const origin = (typeof window === 'undefined') ? '' : window.location.origin

export const MainLayout: FC<Props> = ({children, title}) => {
  return (
    <>
        <Head>
            <title>{title || "Pokemon App"}</title>
            <meta name='author' content='Sebastian Rodriguez'/>
            <meta name='description' content={`Información sobre el pokemon ${title}`}/>
            <meta name='keywords' content={`${title}, pokemon, pokedex` }/>
            <meta property="og:title" content={`Información sobre ${title}`} />
            <meta property="og:description" content={`Esta es la página sobre ${title}`} />
            <meta property="og:image" content={`${origin}/img/banner.png`} />
        </Head>
        <Navbar/>
        <main style={{
            padding:'0 20px'
        }}>
            {children}
        </main>
    </>
  )
}
