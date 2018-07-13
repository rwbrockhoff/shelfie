import React from 'react'

export default function Product(props){
    return (
        <div>
            <h1> {props.name} </h1>
            <p> {props.price} </p>
            <img src={props.imgurl} alt={props.name}/>
        </div>
    )
}