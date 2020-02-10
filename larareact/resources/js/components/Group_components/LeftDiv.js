import React, { Component } from 'react'

export default class LeftDiv extends Component {
    render() {
        return (
                 <div   className="" style={{position:"fixed", paddingRight:"61%"}}>
                        <div  className="card" >
                                                      
                            <div className="card-body">

                                <li style={{listStyleType:"none"}}>
                                    <ul>  <a className="hover"  href="#" style={{fontFamily:"Montserrat, sans-serif", fontWeight:"bold", fontSize:"20px", textDecoration:"none", color:"black" }}><p className="hover"><i style={{fontSize:"20px", marginRight:"10px" }} className=" hover fas fa-home"></i>Home</p></a></ul>
                                    <ul>  <a className="hover"  href="/users/jawadox" style={{fontFamily:"Montserrat, sans-serif", fontWeight:"bold", fontSize:"20px", textDecoration:"none", color:"black" }}><p className="hover"><i style={{fontSize:"20px", marginRight:"10px" }} className=" hover fas fa-user"></i>Profile</p></a></ul>
                                    <ul>  <a className="hover"  href="#" style={{fontFamily:"Montserrat, sans-serif", fontWeight:"bold", fontSize:"20px", textDecoration:"none", color:"black" }}><p className="hover"><i style={{fontSize:"20px", marginRight:"10px" }} className=" hover fas fa-hashtag" ></i>Explore</p></a></ul>
                                    {/* <ul>  <a className="hover"  href="#" style={{fontFamily:"Montserrat, sans-serif", fontWeight:"bold", fontSize:"20px", textDecoration:"none", color:"black" }}><p className="hover"><i style={{fontSize:"20px", marginRight:"10px" }} className=" hover fas fa-bell"></i>Notifications</p></a></ul> */}
                                    <ul>  <a className="hover"  href="#" style={{fontFamily:"Montserrat, sans-serif", fontWeight:"bold", fontSize:"20px", textDecoration:"none", color:"black" }}><p className="hover"><i style={{fontSize:"20px", marginRight:"10px" }} className=" hover fas fa-bell"></i>Notifications</p></a></ul>

                                    <ul>  <a className="hover"  href="#" style={{fontFamily:"Montserrat, sans-serif", fontWeight:"bold", fontSize:"20px", textDecoration:"none", color:"black" }}><p className="hover"><i style={{fontSize:"20px", marginRight:"10px" }} className=" hover fas fa-envelope"></i>Messages</p></a></ul>
                                 </li>
                                
                                
                            </div>
                        </div>
                </div>
        )
    }
}
