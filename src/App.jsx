import Form from "./components/Form/Form"
import './App.scss'
import WeatherCard from './components/WeatherCard/WeatherCard'
import DailyFortune from './components/Daily Fortune/DailyFortune'
import ToDoList from './components/ToDoList/ToDoList'

function App() {

  return (
    <>
    <h2 className="header__title"> Daily Dashboard</h2>
    <WeatherCard/>
    <DailyFortune/>
    <Form />
    <ToDoList />
    </>
  )
}

export default App
