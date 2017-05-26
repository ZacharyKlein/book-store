import React, {Component} from 'react';
import {string, func} from 'prop-types';
import {Form, Row, Col, FormControl, ControlLabel} from 'react-bootstrap';

class BookForm extends Component {

  constructor() {
    super();
    this.state = {author: '', title: ''};
  }

  handleSubmit = (event) => {
    event.preventDefault();

    const author = this.state.author.trim();
    const title = this.state.title.trim();
    if (!title || !author) {
      return;
    }
    this.props.onSubmit({author: author, title: title});
    this.setState({author: '', title: ''});
  };

  handleAuthorChange = (event) => {
    this.setState({author: event.target.value});
  };

  handleTitleChange = (event) => {
    this.setState({title: event.target.value});
  };

  render() {

    return (
      <Row>
        <Form className="form-inline" onSubmit={this.handleSubmit}>

            <Col md={1} mdOffset={1}>
              <ControlLabel>Title</ControlLabel>
            </Col>
            <Col md={3}>
              <FormControl name="title" type="text" value={ this.state.title }
                     onChange={ this.handleTitleChange }/>
            </Col>
            <Col md={1}>
              <ControlLabel>Author</ControlLabel>
            </Col>
            <Col md={3}>
              <FormControl name="author" type="text" value={ this.state.author }
                     onChange={ this.handleAuthorChange }/>
            </Col>
            <Col md={3}>
              <input className="btn btn-success" type="submit" value="Add to library"/>
            </Col>
        </Form>
      </Row>
    );

  }
}

BookForm.propTypes = {
  title: string,
  author: string,
  onSubmit: func
};

export default BookForm;