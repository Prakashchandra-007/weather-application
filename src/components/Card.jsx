import React from 'react';
import './Card.css'

function Card({ data={}}) {
    console.log('indied card compomemt')
    if(data === undefined){
        return;
    }
    console.log(data);
    let {main:{temp},name,weather:[a ],wind:{speed}} = data;
        
    let {description,icon,main} =a;
    console.log(main);
    let bcImage ="https://images.unsplash.com/photo-1534088568595-a066f410bcda?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1502&q=80";
    if(main === "Rain"){
        bcImage ="https://images.unsplash.com/photo-1519692933481-e162a57d6721?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80";
    }
    else if(main === "Cloud"){
        bcImage ="https://images.unsplash.com/photo-1594156596782-656c93e4d504?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80";
    }
    else if(main === "Drizzel"){
        bcImage ="https://images.unsplash.com/photo-1556485689-33e55ab56127?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80";
    }
    else if(main === "Haze"){
        bcImage ="https://images.unsplash.com/photo-1447014421976-7fec21d26d86?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80";
    }
    const cardStyle ={
        backgroundImage: 'url(""https://images.unsplash.com/photo-1447014421976-7fec21d26d86?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80")',
    }
    return (
        <div style={cardStyle} className="card">
            <h1>location: {name}</h1>
            <p>weather conditions: {description}</p>            
            <p>Tempareture: {temp}</p>            
            <p>Wind speed: {speed}</p> 
            <img src={"https://openweathermap.org/img/wn/"+icon+"@4x.png"} alt="" /> 
            
        </div>
    )
}
export default Card;