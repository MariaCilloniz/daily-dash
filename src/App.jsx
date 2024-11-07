import { useState } from 'react'
import Form from "./components/Form/Form"
import './App.css'
import WeatherCard from './components/WeatherCard/WeatherCard'
import DailyFortune from './components/Daily Fortune/DailyFortune'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <WeatherCard/>
    <DailyFortune/>
    <Form />
    
    </>
  )
}

export default App
