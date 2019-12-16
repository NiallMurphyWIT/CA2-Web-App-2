import React, { Component } from 'react';
import PostList from './components/postList/';
import Form from './components/postForm/';
import api from './dataStore/stubAPI';
import _ from 'lodash';

export default class App extends Component {
    addPostItem = (title, author, link) => {
      api.add(title, author, link);
      this.setState({});
    };

    incrementUpvote = (id) => {
      api.upvote(id) ;
      this.setState({});
    };

    decrementUpvote = (id) => {
      api.downvote(id) ;
      this.setState({});
    }

    removePost = (id) => {
      api.delete(id) ;
      this.setState({});
    }


    render() {
        let posts = _.sortBy(api.getAll(), post => -post.upvotes);
        return (
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-4 ">
                <Form handleAdd={this.addPostItem} />
              </div>
              <div className="col-md-8">
                <PostList posts={posts} upvoteHandler={this.incrementUpvote} 
                downvoteHandler={this.decrementUpvote} deleteHandler={this.removePost}/>
              </div>
            </div>
          </div>
        );
    }
}