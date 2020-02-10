import React, { Component } from 'react'

export default class RightDiv extends Component {
    render() {
        return (
            
                 <div  className="" style={{position:"fixed", marginLeft:"30%", width:"20%"}}>
                            <div style={{marginLeft:"9%"}}  className="card">
                                <div style={{fontFamily:"Montserrat, sans-serif", fontWeight:"Ultra-blackbold", fontSize:"20px", color:"black"}}  className="card-header">Trends for you</div>

                <div className="panel-body">
                    <ul style={{marginLeft:"5%", marginTop:"5px" }} className="list-unstyled">
                        <li><a style={{textDecoration:"none", fontFamily:"Montserrat , sans-serif"}} href="#">#Maroc</a></li>
                        <li><a style={{textDecoration:"none", fontFamily:"Montserrat , sans-serif"}} href="#">#Afrique</a></li>
                        <li><a style={{textDecoration:"none", fontFamily:"Montserrat , sans-serif"}} href="#">#Casablanca</a></li>
                        <li><a style={{textDecoration:"none", fontFamily:"Montserrat , sans-serif"}} href="#">#3WA</a></li>
                       
                    </ul>
                </div>
                                
                                
            <div className="card-body" />
                            </div>
                           
                </div>
            
        )
    }
}
