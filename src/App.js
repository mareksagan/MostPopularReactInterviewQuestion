import React, { Component } from 'react';
import {render} from 'react-dom';

// TURN OFF CORS IN THE WEB BROWSER !!!

class App extends Component {
  state = {
    data: []
  }

  componentDidMount() {
    this.getDataFromApi();
  }

  getDataFromApi = () => {
    fetch('https://jsonplaceholder.typicode.com/todos/')
      .then(response => response.json())
      .then(data => {
        this.setState({ data: data });
      })
      .catch(error => {
        this.setState({ error: error })
      })
  }

  render() {
    const list = this.state.data.map(todo => <li style={{color: "red"}} key={todo.id}>{todo.title}</li>)
    return (
      <div className="App">
        <ul>
          {list}
        </ul>
        
        <button onClick={this.getDataFromApi} > Click me to fetch </button>
      </div>
    );
  }
}

export default App;

render(<App />, document.getElementById('root'));
