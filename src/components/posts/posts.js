import React, { Component } from 'react';
import './posts.css';

class Posts extends Component {

    constructor() {
        super();
        this.state = {
            // 1. empty posts array in states.
            posts: []
        }
    }

    // liveCycleFunction auto-runs at component load
    componentDidMount() {
       // 2. call to backend 
          // 3. get response posts
          // 4. which set state.
        fetch('/api/posts')
          .then(res => res.json())
          .then(posts => this.setState({posts: posts}, () =>
            console.log('Posts fectched', posts)));
    }
    
  render() {
    return (
      <div>
          <h2>1 tigernodeofspace posts client</h2>
          <ul>
              {this.state.posts.map(post =>
                <li key={post.id}> {post.title} {post.body} </li>
              )}
          </ul>
      </div>
    );
  }
}

export default Posts;
