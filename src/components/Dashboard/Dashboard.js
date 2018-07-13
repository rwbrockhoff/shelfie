import React, {Component} from 'react';
import Product from '../Product/Product';

export default class Dashboard extends Component {
    
    render(){
        let arr = this.props.inventory.map( (e) => {
           return (
               <div>
               <Product imgurl={e.imgurl} name={e.name} price={e.price}/>
               </div>
           )
        })
        return (
           <div> {arr} </div>
        )
    }
}