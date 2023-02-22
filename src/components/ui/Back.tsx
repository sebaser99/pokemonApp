import { FC } from "react"
import { useRouter } from "next/router"
import { Button } from "@nextui-org/react"

interface Props {
    margin?: string,
    padding?:string,
    fontSize?:string
}
export const Back: FC<Props> = ({margin= '10px', padding= '10px', fontSize = '16px'}) => {
    const router = useRouter ()
  return (
    <Button  css={{padding: `${padding}`, backgroundColor: 'transparent', margin: `${margin}`, fontSize: `${fontSize}`, transition: 'brackground 0.2',
          '&:hover':{background:'linear-gradient(112deg, var(--nextui-colors-cyan600) -63.59%, var(--nextui-colors-pink600) -20.3%, var(--nextui-colors-blue600) 70.46%)'},        
        }} 
          
          onClick={()=>{router.back()}}> Regresar</Button>
  )
}
