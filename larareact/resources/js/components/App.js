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
            bodyComment: ''
        };
        // bind
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.renderPosts = this.renderPosts.bind(this);
        this.addComment = this.addComment.bind(this);
        this.commentChange = this.commentChange.bind(this);
    }


    getPosts() {
        // this.setState({ loading: true });
        axios.get('/posts').then((
            response // console.log(response.data.posts)
        ) =>
            this.setState({
                posts: [...response.data.posts],
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
        this.interval = setInterval(() => this.getPosts(), 20000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }


    handleSubmit(e) {
        e.preventDefault();
        // this.postData();
        axios
            .post('/posts', {
                body: this.state.body
            })
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

    addComment(e) {
        e.preventDefault();
        axios
        .post('/comment', {
            comments: this.state.bodyComment
        })
        .then(response => {
            // console
            // console.log('from handle submit', response);
            // set state
            this.setState({
                comments: [response.data, ...this.state.comments]
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
                    <p  data-toggle="modal" data-target={'#exampleModalLong'+post.id} >{post.body}</p>
                    <div className="modal fade" id={'exampleModalLong'+post.id} tabIndex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
                                <div className="modal-dialog" role="document">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                        <h5 className="modal-title" id="exampleModalLabel">New message</h5>
                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                        </div>
                                        <div className="modal-body">
                                            {post.body}
                                        <form onSubmit={this.addComment} >
                                            <div className="form-group">
                                            <label htmlFor="recipient-name" className="col-form-label">Add a comment</label>
                                            <input onChange={this.commentChange} value={this.state.bodyComment} name={"comments"}  type="text" className="form-control" />
                                            </div>
                                            <div className="form-group">
                                                <input type="submit" value="add comment"/>
                                            </div>
                                        </form>
                                        </div>
                                        <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                        <button type="button" className="btn btn-primary">Send message</button>
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
<div className="container-fluid">
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
            </div>

        );
    }
}
