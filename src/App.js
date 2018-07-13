import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Dashboard from './components/Dashboard/Dashboard';
import Form from './components/Form/Form';
import Header from './components/Header/Header';

class App extends Component {
  constructor(){
    super()
    

    this.state = {
      inventory: []
    }
    this.updateInventory = this.updateInventory.bind(this);
  }

  componentDidMount(){
    axios.get('/api/inventory').then( (res) => {
      this.setState({
        inventory: res.data
      })
    })
  }

  updateInventory(value){
    this.setState({
      inventory: value
    })
  }

  render() {
    return (
      <div className="App">
        <Dashboard inventory={this.state.inventory}/>
       <Form updateInventory={this.updateInventory}/>
        <Header />
      </div>
    );
  }
}

export default App;
