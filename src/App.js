import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import CardList from './components/card-list/card-list.component';

const ApiUrl = 'https://jsonplaceholder.typicode.com/users'

class App extends Component {

  constructor() {
    super()

    this.state = {
      searchFilter: '',
      monsters: []
    }
  }

  componentDidMount() {
    fetch(ApiUrl)
    .then(response => response.json())
    .then(monsters => {
      const list = monsters.map(monster => ({ id: monster.id, name: monster.name }))

      this.setState({
        ...this.state,
        monsters: list
      })
    })
  }

  setFilter = (searchString) => {
    this.setState({
      ...this.state,
      searchFilter: searchString,
    })    
  }

  render() {
    const filteredMonsters = this.state
      .monsters
      .filter(monster => monster.name.toLowerCase().includes(this.state.searchFilter.toLowerCase()))

    return (
      <div className="App">
        <input 
          type="search"
          placeholder="search monsters"
          className="search-box"
          onChange={e => this.setFilter(e.target.value)}
        ></input>
        <CardList monsters={filteredMonsters}></CardList>
      </div>
    );
  }
}

function AppFunc() {
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
    </div>
  );
}

export default App;
