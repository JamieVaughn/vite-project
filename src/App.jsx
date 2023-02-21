import { useState, useEffect } from 'react'
// import './App.css'
import { Main } from './components/main'
import { Layout } from './components/Layout'
import { MyContent } from './components/myContent'
import { DragonCard } from './components/dragonCard'

function App() {
  const [dragons, setDragons] = useState([{
    type: 'fire',
    icon: '🐉'
  }])
  return (
    <Layout setDragons={setDragons}>
      {/* <Main>
        <section id="Profile">New Profile Page</section>
      </Main> */}
      <main>
        {
          dragons.map((dragon, i) => {
            return <DragonCard 
                      key={dragon.type+i}
                      type={dragon.type} 
                      icon={dragon.icon} />
          })
        }
      </main>
    </Layout>
  )
}

export function OtherApp() {
  return (
    <Layout>
      <main>Other content</main>
    </Layout>
  )
}

export default App
