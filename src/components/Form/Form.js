import React, {Component} from 'react';
import defaultimg from '../../assets/default.jpg'


export default class Form extends Component {
    constructor(){
        super()

        this.state = {
            name: '', 
            price: null,
            imgurl: defaultimg,
            clearForm: ''
        }
    }
    
    render(){
        return (
            <div className="formBox">
                 <img src={this.state.imgurl} alt="nothing"/>
                 <p>Image URL:</p>
                 <input value={this.state.clearForm} onChange={ (event) => this.setState({clearForm: event.target.value})}/>
                 <p>Product Name:</p>
                 <input value={this.state.name} onChange={ (event) => this.setState({name: event.target.value})}/>
                 <p>Price:</p>
                 <input value={this.state.price} onChange={ (event) => this.setState({price: event.target.value})}/>

                 <button onClick={() => this.setState({clearForm: '', name: '', price: null})}> Clear </button>
                 <button> Add to Inventory </button>
            </div>
        )
    }
}