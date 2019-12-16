import React, { Component } from 'react';
import './postForm.css';



export default class Form extends Component {
    state = { title: '', author: '', link: ''};

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.handleAdd( this.state.title, this.state.author, this.state.link)
        this.setState({ title: '', author:'', link: ''})
    }

    handleTitleChange = (e) =>  this.setState({title: e.target.value});
    handleAuthorChange = (e) =>  this.setState({author: e.target.value});
    handleLinkChange = (e) => this.setState({link: e.target.value});

    render() {
        return (
        <form   className="form bg-dark text-light">
            <h3>Add a Teamfight Tactics update or news Post</h3>
            <div className="form-group">
                <input type="text"
                    className="form-control"
                    placeholder="Title"
                    value={this.state.title}
                    onChange={ this.handleTitleChange } />
            </div>
            <div className="form-group">
                <input type="text"
                    className="form-control"
                    placeholder="Author"
                    value={this.state.author}
                    onChange={ this.handleAuthorChange } />
            </div>
            <div className="form-group">
                <input type="text"
                className="form-control"
                placeholder="Link"
                value={this.state.link}
                onChange={ this.handleLinkChange } />
            </div>
            <button type="submit" className="btn btn-primary"
                onClick={this.handleSubmit}>Post</button>
        </form>
        );
    }
}