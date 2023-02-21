import { useState } from 'react'
import reactLogo from '../../assets/react.svg'
import { DragonCard } from '../dragonCard'
import { MyDice } from '../dice'


const EventComponent = props => {
  const [clicks, setClicks] = useState(0)
  
  return (
    <button style={{color: "white", fontSize: "3rem"}} onClick={() => (setName('bob'), setClicks(clicks+1))}>
      Clicks: {clicks}
    </button>
  )
}

export function MyContent(props) {

  return (
    <>
    <MyDice max={6}/>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <EventComponent />
     <DragonCard type={'fire'} icon={'🐉'}/>
     <DragonCard type={'water'} icon={'🐉'}/>
     <DragonCard type={'air'} icon={'🐉'}/>
     <DragonCard type={'earth'} icon={'😀'}/>
    </>
  )
}