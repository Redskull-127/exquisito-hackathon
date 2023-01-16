import Hero from '../src/components/Hero'
import Body from '../src/components/Body'
import firebase from '../src/firebase/firebase'

export default function Home() {
  return (
    <div className='w-screen flex flex-col'>
      <Hero />
      <Body />
    </div>
  )
}
