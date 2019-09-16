import React, {Component} from 'react';
import Photo from './Photo.js';
import { Link } from 'react-router-dom';

class PhotoWall extends Component {
  render() {
    return <div>
            <Link className="addIcon" to="/addPhoto"> </Link>
            <div className="photoGrid">
            {this.props.posts.map((post, index) => <Photo key={index} post={post} onRemovePhoto={this.props.onRemovePhoto}/>)}
            </div>
          </div>
  }
}

export default PhotoWall;
