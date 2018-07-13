import React, {Component} from 'react';
import Product from '../Product/Product';

export default class Dashboard extends Component {
    
    render(){
        let arr = this.props.inventory.map( (e) => {
           return (
               <div>
               <Product imgurl={e.img_url} name={e.productname} price={e.price}/>
               </div>
           )
        })
        return (
           <div> {arr} </div>
        )
    }
}