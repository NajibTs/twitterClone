import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios'
export default class App extends Component {    
    constructor(props) {
        super(props);
        this.state = {
            body: '',
            posts: [],
            loading: false,
            comments:[],
            bodyComment: '',
            
        };
        // bind
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.renderPosts = this.renderPosts.bind(this);
        this.commentChange = this.commentChange.bind(this);
    }    
    getPosts() {
        // this.setState({  });
        axios.get('/posts')
        
        .then((
            response // console.log(response.data.posts)
        ) =>
            this.setState({
                posts: [...response.data.posts]
               
            })
        );
    }
    getcomment(id,e) {
        e.preventDefault();
        // this.setState({ loading: true });
        axios.get(`/comment/${id}`).then((
            response // console.log(response.data.posts)
        ) =>
            this.setState({
                comments: [...response.data.comments],
                // loading: false
            })
        );
    }
    // preventDefault(e) {
    //     return e.preventDefault();
    // }    
    componentWillMount() {
        this.getPosts();
    }    
    componentDidMount() {
        this.interval = setInterval(() => this.getPosts(), 200000);
    }    
    componentWillUnmount() {
        clearInterval(this.interval);
    }  
    
   

    handleSubmit(e) {
        e.preventDefault();
        // this.postData();
        axios
            .post('/posts', 
                {body: this.state.body},
                // {headers:{"Content-type":"application/json"}},
            )
            .then(response => {
                // console
                // console.log('from handle submit', response);
                // set state
                this.setState({
                    posts: [response.data, ...this.state.posts],
                    body: ''
                });
            });
        // clear the state body
        this.setState({
            body: ''
        });
    }    
    handleChange(e) {
        this.setState({
            body: e.target.value
        });
    }


    commentChange(e) {
        this.setState({
            bodyComment: e.target.value
            
        });
    }    
    addComment(id,e) {
        // e.preventDefault();
        // console.log(id)
        
        axios
        .post('/comment', 
            {comments: this.state.bodyComment, post_id:id},
            {headers:{"Content-type":"application/json"},
        })
        .then(response => {
            // console
            // console.log('from handle submit', response);
            // set state
            this.setState({
                comments: response.data,
                bodyComment: ''
            });
        });
        this.setState({
            bodyComment: ''
        })


        
    }   
     renderPosts() {
        return this.state.posts.map(post => (
            <div key={post.id} className="media">
                <div className="media-left">
                    <img src={post.user.avatar} className="media-object mr-2" />
                </div>
                <div className="media-body">
                    <div className="user">
                        <a href={`/users/${post.user.username}`}>
                            <b>{post.user.username}</b>
                        </a>{' '}
                        - {post.humanCreatedAt}
                    </div>
                    <p>{post.body}</p>
                    <button onClick={this.getcomment.bind(this,post.id)} data-toggle="modal" data-target={'#exampleModalLong'+post.id}>Comments</button>
                    <div className="modal fade" id={'exampleModalLong'+post.id} tabIndex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
                                <div className="modal-dialog" role="document">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                        <h5 className="modal-title" id="exampleModalLabel">Tweets</h5>
                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                        </div>
                                        <div className="modal-body">
                                        <div className="row">
                                            <div className="media-left">
                                                <img src={post.user.avatar} className="media-object mr-2" />
                                            </div>{' '}
                                            <div className="user">
                                                <a href={`/users/${post.user.username}`}>
                                                    <b>{post.user.username}</b>
                                                </a>{' '}
                                                - {post.humanCreatedAt}
                                            </div>
                                        </div>
                                            {post.body}
                                            {post.id}
                                            <br/>
                                            <label htmlFor="recipient-name" className="bold col-form-label">Add a comment</label>
                                        <form onSubmit={this.addComment.bind(this,post.id)} >
                                            <div className=" row">
                                                <div className=" col-8 ">
                                                <input onChange={this.commentChange} value={this.state.bodyComment}  type="text" className="form-control" />
                                                </div>
                                                <div className="col-4">
                                                    <input  className="btn btn-primary" type="submit" value="Add comment"/>
                                                </div>
                                            </div>
                                        </form>
                                        <div className="form-group"> <b>{'all comments ::'}</b>
                                        {this.state.comments.map(comment =>(
                                            <div>
                                                <div className="user">
                                                    <a href={`/users/${post.user.username}`}>
                                                        <b>{comment.username}</b>
                                                    </a>{' '}
                                                    - {comment.humanCreatedAt}
                                                </div>
                                                <div key={comment.id-comment.id}>{comment.comments}</div>
                                            </div> 
                                        ))
                                        // post.comments
                                        }
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                </div>
            </div>
        ));
    }    
    render() {        
    return (
<div  className="container-fluid">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-header">Tweet something..</div>                            
                            <div className="card-body">
                                <form onSubmit={this.handleSubmit}>
                                    <div className="form-group">
                                        <textarea
                                            onChange={this.handleChange}
                                            value={this.state.body}
                                            className="form-control"
                                            rows="5"
                                            maxLength="140"
                                            placeholder="Whats up?"
                                            required
                                        />
                                    </div>
                                    <div className="row">
                                        <input type="submit" value="Post" className="ml-3 form-control col-4" />
                                        <h6 className="ml-5 pull-right mt-2">320 characters remaining</h6>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>                        
                    <div className="col-md-6">
                            <div className="card">
                                <div className="card-header">Recent tweets</div>
                                {!this.state.loading ? this.renderPosts() : 'Loading...'}
                                
                                <div className="card-body" />
                            </div>
                        </div>
                </div>
            </div>        );
    }
}