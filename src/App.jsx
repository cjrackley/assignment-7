import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import rock from '/public/rock.png'
import paper from '/public/paper.png'
import scissors from '/public/scissors.png'
import question from '/public/question-mark.png'
import PlayerSelection from './PlayerSelectionComponent'
import GameControls from './GameButtonComponent'
import './App.css'

function App() {
  const [playerChoice, setPlayerChoice] = useState(null)
  const [enemyChoice, setEnemyChoice] = useState(null)
  const [result, setResult] = useState(null)
  const [streak, setStreak] = useState(0);

  const imageMap = {
    rock,
    paper,
    scissors
  }

  return (
    <>
      <section className='game'>
        <section className='spacer'></section>
        <section id="display">
          <div className='view'>
            <img src={imageMap[playerChoice] || question} className="player" />
            <h1>VS.</h1>
            <img src={imageMap[enemyChoice] || question} className="computer" />
          </div>
          <div className='caption'>
            <h1>Player</h1>
            <h1>Enemy</h1>
          </div>
        </section>
        <section className='spacer'></section>
        <section id="choice">
          <PlayerSelection setPlayerChoice={setPlayerChoice} />
          <GameControls playerChoice={playerChoice} setPlayerChoice={setPlayerChoice} setEnemyChoice={setEnemyChoice} setResult={setResult} streak={streak} setStreak={setStreak} />
        </section>
        <section className='spacer'></section>
        <section className='result'>
          <h1>Results: {result || "Play to Win"}</h1>
          <h1>Streak: {streak} </h1>
        </section>
      </section>
    </>
  )
}

export default App
