import React, { Component, Fragment } from 'react';
import './postItem.css';
import "../../fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from 'react-router-dom';


export default class PostItem extends Component {
    handleUpVote = () =>  this.props.upvoteHandler(this.props.post.id);
    handleDownVote = () => this.props.downvoteHandler(this.props.post.id);
    handleDelete = () => this.props.deleteHandler(this.props.post.id); 
    render() {
        let line = this.props.post.link ? (
            <a href={this.props.post.link}>{this.props.post.title}</a>
        ) : (
            <span>{this.props.post.title}</span>
        );
        return (
            <Fragment>
                <span className="ptr" onClick={this.handleUpVote}>
                    <FontAwesomeIcon icon={["fas", "thumbs-up"]} size="2x" />
                {` ${this.props.post.upvotes}`}
                </span>
                <span className="ptr" onClick={this.handleDownVote}>
                    <FontAwesomeIcon icon={["fas","thumbs-down"]} size="2x" />
                </span>
                <span className="postitem">
                    {line}
                    <span className="ptr" onClick={this.handleDelete}>
                        <FontAwesomeIcon icon={["fas", "trash-alt"]} size="1x" />
                    </span>
                    <span>
                        <Link to={`/posts/${this.props.post.id}` }>Comments</Link>
                    </span>
                    <span>
                        <Link to={`/edits/${this.props.post.id}` }>
                            <FontAwesomeIcon icon={["fas", "edit"]} size="1x" /></Link>
                    </span>
                </span>
                <p className="author">{this.props.post.author}</p>
            </Fragment>
        );
    }
} 