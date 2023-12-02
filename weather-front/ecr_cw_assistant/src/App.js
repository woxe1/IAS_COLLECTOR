import logo from './logo.svg';
import './App.css';
import WeatherContainer from './components/weather_container/WeatherContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React

        </a>
      </header>

      <div class="collector-container">
        USB-medium: Not Found
        Last-collection: 11.08.2023
      </div>

      <WeatherContainer/>
    </div>
  );
}

export default App;
