import React, { Component } from "react";
import "../../fontawesome";


export default class Form extends Component {
  state = { comment: "", name: "" };

  handleCommentChange = e => {
    this.setState({ comment: e.target.value });
  };

  handleNameChange = e => {
    this.setState({ name: e.target.value });
  };

  handleTitleUpdate = e => {

  }

  handleAuthorUpdate = e => {

  }

  handleLinkUpdate = e => {

  }

  onSubmit = e => {
    e.preventDefault();
    let comment = this.state.comment.trim();
    let name = this.state.name.trim();
    if (!comment) {
      return;
    }
    this.props.addCommentHandler(comment, name);
    this.setState({ comment: "", name: "" });
  };

  render() {
    return (
      <form style={{ marginTop: "30px" }}>
        <h3>Edit post here(Not Working Yet)</h3>

        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Edit Title"
            value={this.state.post}
            onChange={this.handleTitleUpdate}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Edit Author"
            value={this.state.post}
            onChange={this.handleAuthorUpdate}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Edit Link"
            value={this.state.post}
            onChange={this.handleLinkUpdate}
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={this.onSubmit}
        >
          Submit
        </button>
      </form>
    );
  }
}