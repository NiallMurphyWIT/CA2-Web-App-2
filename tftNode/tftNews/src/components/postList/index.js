import React, { Component, Fragment } from 'react';
import PostItem from '../postItem/';

export default class PostList extends Component {
    render() {
        let items = this.props.posts.map(
         (post,index) => 
             <PostItem key={index} 
                 post={post} 
                 upvoteHandler={this.props.upvoteHandler} 
                 downvoteHandler={this.props.downvoteHandler}
                 deleteHandler={this.props.deleteHandler}/> 
         );
      return <Fragment>{items}</Fragment>;
    }
  }