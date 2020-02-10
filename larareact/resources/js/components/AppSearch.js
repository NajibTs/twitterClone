import React, { Component } from 'react'
import axios from 'axios';

export default class AppSearch extends Component {

    constructor(props) {
        super(props);
        this.state = {
            users: [],
            noresult:String,
            count:Number,
            bodysearch:String
            
        };

    }  

    searchChange(e) {
        this.setState({
            bodysearch: e.target.value
            
        });
        axios.post('/search', 
        {searches: this.state.bodysearch},
        {headers:{"Content-type":"application/json"},
    })
    .then(response => {
        // console
        console.log('from handle submit', response);
        // set state
        this.setState({
            users: response.data.users,
            count:response.data.count,
            noresult:response.data.noResult,
        });
    });
    } 

    searchSubmit (e){
        e.preventDefault();
        axios.post('/search', 
        {searches: this.state.bodysearch},
        {headers:{"Content-type":"application/json"},
    })
    .then(response => {
        // console
        console.log('from handle submit', response);
        // set state
        this.setState({
            users: response.data.users,
            count:response.data.count,
            noresult:response.data.noResult,
        });
    });
        
    }

    render() {
        return (
            <div>
                <form onSubmit={this.searchSubmit.bind(this)} className="form-inline">
                        <a href="" type="submit"><i class="fas fa-search" aria-hidden="true"></i></a>
                        <input onChange={this.searchChange.bind(this)} value={this.state.bodysearch}  className="form-control form-control-sm ml-3 w-75" type="text" placeholder="Search"
                        aria-label="Search" />
                </form>
                {this.state.bodysearch ?
                        <div className="bg-white mt-1" style={{position:"fixed", width:"17.3%"}}>
                            {this.state.count > 0 ? 
                                <div className="bg-white p-2">
                                    <div className="text-success">{this.state.count} Result</div>
                                    <div className="alert">
                                        {this.state.users.map((user) => (
                                            <div>
                                                
                                                <img style={{width:"30px", marginRight:"10px" }} src={user.avatar}/>
                                                <a href={`/users/${user.username}`}>{user.username}</a>
                                                
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            :
                                <div className="rounded p-2 w-100">
                                    <div className="text-danger">{this.state.noresult}</div>
                                </div> 
                            }
                        </div>
                    :null}
            </div>
        )
    }
}
