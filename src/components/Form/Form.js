import React, {Component} from 'react';
import defaultimg from '../../assets/default.jpg'
import axios from 'axios';


export default class Form extends Component {
    constructor(props){
        super(props)

        this.state = {
            name: '', 
            price: null,
            imgurl: defaultimg,
            newImg: ''
        }
       
    }

    postNewProduct = (props) => {
        let image = this.state.newImg
        let name = this.state.name
        let price = this.state.price
        axios.post('/api/product', {img_url: image, productname: name, price: price}).then( (res) => {
            this.props.updateInventory(res.data)
            
        })
    }
    
    render(){
        return (
            <div className="formBox">
                 <img src={this.state.imgurl} alt="nothing"/>
                 <p>Image URL:</p>
                 <input value={this.state.newImg} onChange={ (event) => this.setState({newImg: event.target.value})}/>
                 <p>Product Name:</p>
                 <input value={this.state.name} onChange={ (event) => this.setState({name: event.target.value})}/>
                 <p>Price:</p>
                 <input value={this.state.price} onChange={ (event) => this.setState({price: event.target.value})}/>

                 <button onClick={() => this.setState({clearForm: '', name: '', price: ''})}> Clear </button>
                 <button onClick={this.postNewProduct}> Add to Inventory </button>
            </div>
        )
    }
}