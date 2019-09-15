import React, {Component} from 'react';
import Photo from './Photo.js';

class PhotoWall extends Component {
  render() {
    return <div>
            <a onClick={this.props.onNavigate} className="addIcon" href="#addPhotos"/>
            <div className="photoGrid">
            {this.props.posts.map((post, index) => <Photo key={index} post={post} onRemovePhoto={this.props.onRemovePhoto}/>)}
            </div>
          </div>
  }
}

export default PhotoWall;
