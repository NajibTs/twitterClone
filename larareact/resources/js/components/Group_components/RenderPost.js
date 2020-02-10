import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class RenderPost extends Component {

    render() {


        const {id, user, humanCreatedAt, body, images, videos} = this.props.post
        return (
            <div key={id} className="media">
                <div  className="media-left">
                    <img src={user.avatar} className="media-object mr-2" />
                </div>
                <div   className="media-body">
                    <div className="user">
                        <a href={`/users/${user.username}`}>
                            <b>{user.username}</b>
                        </a>{' '}
                        - {humanCreatedAt}
                        
                    </div>
                    
                    <p style={{fontFamily:"Arial"}} >{body}</p>
                    <img style={{width:"400px",display:"block", paddingBottom:"10px"}} src={`images/${images}`} alt=""/>

                    {/* {  !videos ?
                        null :
                        <video style={{display:"block"}} src={`/storage/videos/${videos}`} frameBorder="0"></video>
                        
                    }  */}

                    {!videos ? 
                        null :
                        <video frameBorder="0" className="mr-4 d-block" style={{height: "280px",width:"95%"}} class="video-fluid z-depth-1" loop controls muted>
                            <source src={`/storage/videos/${videos}`} type="video/mp4" />
                        </video>
                        }



                    <button  className="mb-4 btn btn-success" onClick={this.props.getcomment}  data-toggle="modal" data-target={'#exampleModalLong'+id}><i class="fas fa-comment"></i></button> 

                    <button style={{fontSize:"30px", border:"none", marginBottom:"5px"}} className="b" onClick={this.props.toggle}>♡</button>
                                             
            </div>
        </div>
        )
    }
}


RenderPost.PropTypes = {

    getcomment:PropTypes.func.isRequired,
    toggle:PropTypes.func.isRequired,
    post:PropTypes.object.isRequired,
   
   }



   