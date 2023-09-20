import Image from 'next/image'
import Counter from './Components/Counter'
import Training from './training/page'
import Bd from './Components/Bd'
import Intro from './Components/Intro'

export default function Home() {
  return (
   <div>
    <Intro/>
    <Bd/>
    <Counter/>
    <Training/>
   </div>
  )
}
