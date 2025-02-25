import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from 'actions';

class CommentBox extends Component {
  state = { comment: '' };

  handleCange = event => {
    this.setState({ comment: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();

    this.props.saveComment(this.state.comment);
    this.setState({ comment: '' });
  };
  render() {
    return (
      <div>
        {' '}
        <form onSubmit={this.handleSubmit}>
          <h4>Add a Comment</h4>
          <textarea onChange={this.handleCange} value={this.state.comment} />
          <div>
            <button>Submit Comment</button>
          </div>
        </form>
        <button className='fetch-comments' onClick={this.props.fetchComments}>
          Fetch Comments
        </button>
      </div>
    );
  }
}

export default connect(null, actions)(CommentBox);
