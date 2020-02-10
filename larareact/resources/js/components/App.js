import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import LeftDiv from './Group_components/LeftDiv';
import RightDiv from './Group_components/RightDiv';
import RenderPost from './Group_components/RenderPost';
import PostDiv from './Group_components/PostDiv';
import GetComments from './Group_components/GetComments';

export default class App extends Component {    
    constructor(props) {
        super(props);
        this.state = {
            body: '',
            posts: [],
            loading: false,
            comments:[],
            bodyComment: '',
            image: '',
            video:''
        };
        // bind
        // this.onFormSubmit = this.onFormSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.renderPosts = this.renderPosts.bind(this);
        this.commentChange = this.commentChange.bind(this);
        this.imageChange = this.imageChange.bind(this);
        this.fileUpload = this.fileUpload.bind(this);
        this.videoChange= this.videoChange.bind(this);
    }  
      getPosts() {
        this.setState({ theris: true });
        axios.get('/posts').then((
            response // console.log(response.data.posts)
        ) =>
            this.setState({
                posts: [...response.data.posts],
                theris: false
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
    }    componentDidMount() {
        this.interval = setInterval(() => this.getPosts(), 200000);
    }    componentWillUnmount() {
        clearInterval(this.interval);
    }
// hhhhhhhhhhhhhhhhhaaaaaaaaaaaaaaaannnnnnnnnnnnnnndddddddddddddllllllllllllllle submit    //azertyui
    imageChange(e) {
        let files = e.target.files || e.dataTransfer.files;
        if (!files.length)
              return;
        this.createImage(files[0]);
        this.setState({
            loading:true

        })
    }


    videoChange(e) {
        let files = e.target.files || e.dataTransfer.files;
        if (!files.length)
              return;
        this.createVideo(files[0]);
        this.setState({
            loading:true

        })
    }





    createImage(file) {
        let reader = new FileReader();
        reader.onload = (e) => {
          this.setState({
            image: e.target.result,
            loading:true
          })
        };
        reader.readAsDataURL(file);
      }
        //azertyui// onFormSubmit(e){
//     e.preventDefault() 
//     this.fileUpload(this.state.image);
//   }  


createVideo(file) {
    let reader = new FileReader();
    reader.onload = (e) => {
      this.setState({
        video: e.target.result,
        loading:true
      })
    };
    reader.readAsDataURL(file);
  }




fileUpload(e) {
        e.preventDefault();
        // this.postData();
        // this.fileUpload(this.state.image);
        // const bodypost = {body: this.state.body}
        // const formData = {file: this.state.image, bodypost}
        axios
            .post('/posts', 
                {bodypost: this.state.body , file: this.state.image, video:this.state.video},
                
                {headers:{"Content-type":"application/json"},
            })
            .then(response => {
                // console
                console.log('from handle submit', response);
                // set state
                this.setState({
                    posts: [response.data, ...this.state.posts],
                    body: '',
                    image:'',
                    video:'',
                    loading:false
                });
            });
        // clear the state body
        this.setState({
            body: '',
            image:'',
            video:''
        });
    }   
     //wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww    
     handleChange(e) {
        this.setState({
            body: e.target.value,
            loading:true
        });
    }
    commentChange(e) {
        this.setState({
            bodyComment: e.target.value
            
        });
    }    
    addComment(id) {
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

    toggle(){

        const whiteHeart = '\u2661';
// const blackHeart = '\u2665';
const blackHeart = '\u2764\uFE0F';

  const like = document.querySelector('.b').textContent;
  if(like==whiteHeart) {
    document.querySelector('.b').textContent = blackHeart;
    console.log(like)
  } else {
    document.querySelector('.b').textContent = whiteHeart;
  }

    }

    renderPosts() {
        return this.state.posts.map(post => (
            <div>
            <RenderPost
            getcomment={this.getcomment.bind(this, post.id)}
            toggle={this.toggle.bind(this)}
            post={post}
            />

            

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
                    
                    <br/>
                    <label htmlFor="recipient-name" className="bold col-form-label">Add a comment</label>
                <form onSubmit={this.addComment.bind(this,post.id)} >
                    <div className=" row">
                        <div className=" col-8 ">
                        <input onChange={this.commentChange} value={this.state.bodyComment}  type="text" className="form-control" />
                        </div>
                        <div className="col-4">
                            <input className="btn btn-primary" type="submit" value="add comment"/>
                        </div>
                    </div>
                </form>
                <div className="form-group"> <b>{'All Comments :'}</b>
                {/* get comments */}
                {this.state.comments.map(comment =>(
                    
                    <GetComments 

                    comment={comment}
                    post={post}
                    
                    />
                    ))
                    // post.comments
                    }</div>
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
                  <LeftDiv />                     
                    <div className="col-md-6">
                    <div className="card">
                    

                        <div className="row">
                            
                        <PostDiv
                        fileUpload={this.fileUpload}
                        handleChange={this.handleChange}
                        imageChange={this.imageChange}
                        videoChange={this.videoChange}
                        body={this.state.body}
                        image={this.state.image}
                        video={this.state.video}

                        />
                </div>

                                
                                
                    <div className="card-body" />
                    </div>
                    <div style={{marginTop:"30px"}} className="card">

                    { this.renderPosts() }

                    </div>
                           
                    </div>
                   

                  <RightDiv/>

                </div>
            </div>       


            );
    }
}