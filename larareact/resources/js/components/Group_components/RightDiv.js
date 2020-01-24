import React, { Component } from 'react'

export default class RightDiv extends Component {
    render() {
        return (
            
                 <div  className="" style={{position:"fixed", paddingLeft:"60%"}}>
                            <div className="card">
                                <div style={{fontFamily:"Montserrat, sans-serif", fontWeight:"Ultra-blackbold", fontSize:"20px", color:"black"}}  className="card-header">Trends for you</div>

                <div className="panel-body">
                    <ul style={{marginLeft:"5%", }} className="list-unstyled">
                        <li><a href="#">#Maroc</a></li>
                        <li><a href="#">#Afrique</a></li>
                        <li><a href="#">#Casablanca</a></li>
                        <li><a href="#">#3WA</a></li>
                       
                    </ul>
                </div>
                                
                                
            <div className="card-body" />
                            </div>
                           
                </div>
            
        )
    }
}
