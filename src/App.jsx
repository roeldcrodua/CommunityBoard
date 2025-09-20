import './App.css';
import Board from './components/Board'

const App = () => {

  return (
    <div className="App">
      <div className='flex-container'>
        <img className='logo' src='https://vpsfl.org/ImageRepository/Document?documentID=6054' />
        <h1 className='title-header'>Welcome to <br /> Village of Palm Springs</h1>
      </div>
      <h1 className='event-header'>List of Recent and Future Community Events</h1>
      <Board />


    </div>
  )
}

export default App;