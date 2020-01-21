import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class PostDiv extends Component {
    render() {
        return (
            
                <div className="col-md-12">
                        <div className="card">
                                                       
                            <div  className="card-body">
                                <form onSubmit={this.props.fileUpload}  encType="multipart/form-data">
                                    <div className="form-group">
                                        <textarea
                                            onChange={this.props.handleChange}
                                            value={this.props.body}
                                            className="form-control"
                                            rows="5"
                                            maxLength="140"
                                            placeholder="What's happening?"
                                            style={{marginBottom:"20px"}}
                                        />
                                        <input hidden type="file" name="image" onChange={this.props.imageChange} ref={fileInput=> this.fileInput = fileInput}/>
                                        <button   className="mr-2 btn btn-warning" type="button" //value="Add Picture" 
                                        onClick={()=> this.fileInput.click()}> <i alt="Add Image" style={{fontSize:"25px"}} className="fas fa-image" ></i> </button>
                                    
                                    <input hidden  type="file" name="video" onChange={this.props.videoChange} ref={fileInput2 => this.fileInput2 = fileInput2} />   
                                    <button className="ml-2 btn btn-danger" type="button" 
                                    onClick={()=> this.fileInput2.click()}  ><i alt="Add video" style={{fontSize:"25px"}} className="fas fa-video" ></i>  </button>                                
                                    </div>
                                    <div className="row">
                                        {!this.props.body && !this.props.image && !this.props.video ? 
                                        (<input style={{backgroundColor:"#86c7f4", color:"white"}} type="button" value="Tweet" className="ml-3 form-control col-4" />) :
                                        (<input style={{backgroundColor:"#00acee", color:"white"}}  type="submit" value="Tweet" className="ml-3 form-control col-4" />)
                                    }
                                        
                                        <h6 className="ml-5 pull-right mt-2">320 characters remaining</h6>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
           
        )
    }
}

PostDiv.PropTypes = {

 fileUpload:PropTypes.func.isRequired,
 handleChange:PropTypes.func.isRequired,
 imageChange:PropTypes.func.isRequired,
 videoChange:PropTypes.func.isRequired,
 body:PropTypes.string.isRequired,
 image:PropTypes.string.isRequired,
 video:PropTypes.string.isRequired,

}