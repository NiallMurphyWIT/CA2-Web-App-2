import React, { Component, Fragment } from "react";
import "../../fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './comment.css'

export default class Comment extends Component {
  handleUpVote = () =>  this.props.upvoteHandler(this.props.comment.id);
  handleDownVote = () => this.props.downvoteHandler(this.props.comment.id);
  handleDelete = () => this.props.deleteHandler(this.props.comment.id);
  render() {
    return (
      <Fragment>
        <span className=" ptr" onClick={this.handleUpVote}>
          <FontAwesomeIcon icon={["fas", "thumbs-up"]} size="2x" />
          {` ${this.props.comment.upvotes}`}
        </span>
        <span className=" ptr" onClick={this.handleDownVote}>
        <FontAwesomeIcon icon={["fas", "thumbs-down"]} size="2x" />
        </span>
        <span className="commentitem">
          {`${this.props.comment.comment} (by ${this.props.comment.author})`}
        </span>
        <span className=" ptr" onClick={this.handleDelete}>
        <FontAwesomeIcon icon={["fas", "trash-alt"]} size="2x" />
        </span>
        <p></p>
      </Fragment>
    );
  }
}