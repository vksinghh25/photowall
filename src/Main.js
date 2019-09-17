import React, { Component } from 'react';
import Title from './Title.js';
import PhotoWall from './PhotoWall.js';
import AddPhoto from './AddPhoto.js';
import { Route } from 'react-router-dom';

class Main extends Component {
  constructor() {
    console.log("contructor");
    super();
    this.state = {
      posts: [],          // initially the list of posts is empty
      screen: 'photos'    // photos, addPhotos
    }

    // when these methods get called, they lose the binding of 'this' to the object
    this.removePhoto = this.removePhoto.bind(this);
    this.addPhoto = this.addPhoto.bind(this);
  }

  removePhoto(postRemoved) {
    console.log("Post Removed");
    this.setState({ posts: this.state.posts.filter(post => post !== postRemoved) });
  }

  addPhoto(postAdded) {
    console.log("Adding Post");
    this.setState({ posts: this.state.posts.concat(postAdded) });
  }

  // once the component has been put into the  DOM
  componentDidMount() {
    console.log("componentDidMount");
    const data = this.simulateFetchPosts();

    // set the state and the Main component will re-render, this time with posts
    this.setState({
      posts: data
    });
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
  }

  render() {
    console.log("render");
    return(
      <div>
            {/* when the path is "/", then render the following components */}
            <Route exact path="/" render={() => (
              <div>
                <Title/>
                {/* pass reference to the removePhoto methods to the PhotoWall component */}
                <PhotoWall posts={this.state.posts} onRemovePhoto={this.removePhoto}/>
              </div>
            )}/>
            {/* when the path is "/addPhoto", then render the following components */}
            <Route exact path="/addPhoto" render={({history}) => (
              <div>
                <AddPhoto onAddPhoto={(addedPost) =>  {
                  this.addPhoto(addedPost);
                  history.push('/');
                }}/>
              </div>
            )}/>
      </div>
    )
  }

  // simple method to simulate fetching of posts over a DB connection
  simulateFetchPosts() {
    return [{
        id: 0,
        description: "beautiful landscape",
        imageLink: "https://image.jimcdn.com/app/cms/image/transf/none/path/sa6549607c78f5c11/image/i4eeacaa2dbf12d6d/version/1490299332/most-beautiful-landscapes-in-europe-lofoten-european-best-destinations-copyright-iakov-kalinin.jpg" +
        "3919321_1443393332_n.jpg"
      }, {
        id: 1,
        description: "Aliens???",
        imageLink: "https://img.purch.com/rc/640x415/aHR0cDovL3d3dy5zcGFjZS5jb20vaW1hZ2VzL2kvMDAwLzA3Mi84NTEvb3JpZ2luYWwvc3BhY2V4LWlyaWRpdW00LWxhdW5jaC10YXJpcS1tYWxpay5qcGc=" +
        "08323785_735653395_n.jpg"
     }, {
       id: 2,
       description: "On a vacation!",
       imageLink: "https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2017/08/24/104670887-VacationExplainsTHUMBWEB.1910x1000.jpg"
     }];
  }
}

export default Main;
