import React, {Component} from 'react';
import Photo from './Photo.js';
import { Link } from 'react-router-dom';

class PhotoWall extends Component {
  render() {
    return <div>
            {/* the Link component is used to specify something that upon clicking takes us to a different path */}
            {/* the path is metioned inside the 'to' attribute */}
            <Link className="addIcon" to="/addPhoto"> </Link>
              <div className="photoGrid">
                { this.props.posts
                  .sort(function(x, y) {
                    return y.id - x.id
                  })
                  .map((post, index) => {
                    console.log(post.id);
                    return <Photo key={index} post={post} onRemovePhoto={this.props.onRemovePhoto}/>;
                  }) }
              </div>
          </div>
  }
}

export default PhotoWall;
