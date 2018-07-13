import React, { Component } from 'react';
import './App.css';
import Dashboard from './components/Dashboard/Dashboard';
import Form from './components/Form/Form';
import Header from './components/Header/Header';

class App extends Component {
  constructor(){
    super()

    this.state = {
      inventory: [
        {name: 'Chips', imgurl: 'https://images-na.ssl-images-amazon.com/images/I/91eYwmmel5L._SL1500_.jpg', price: 14.99},
        {name: 'Beans', imgurl: 'https://previews.123rf.com/images/iimages/iimages1303/iimages130300171/18210105-illustration-of-a-can-of-beans-on-a-white-background.jpg', price: 9.00}
      ]
    }
  }

  render() {
    return (
      <div className="App">
        <Dashboard />
       <Form />
        <Header />
      </div>
    );
  }
}

export default App;
