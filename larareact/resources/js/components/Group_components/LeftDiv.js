import React, { Component } from 'react'

export default class LeftDiv extends Component {
    render() {
        return (
                 <div className="col-md-3">
                        <div className="card">
                                                      
                            <div className="card-body">

                                <li style={{listStyleType:"none"}}>
                                    <ul>Home</ul>
                                    <ul>Explore</ul>
                                    <ul>Notifications</ul>
                                    <ul>Messages</ul>
                                </li>
                                
                                
                            </div>
                        </div>
                </div>
        )
    }
}
