import { Component } from 'react'
import CommentArea from './CommentArea'
import SingleBook from './SingleBook'

import {Container, Col, Form, Row } from 'react-bootstrap'

class BookList extends Component {
  state = {
    searchQuery: '',
    bookSelected: ""
  }

  sendData = (value) => {
    this.props.parentCallback(value)
  }
  
  setSelected = (value) => {
    this.setState({ bookSelected: value });
  };

  componentDidUpdate = (prevProps, prevState ) => {
    if (prevState.bookSelected !== this.state.bookSelected)  {
      this.sendData(this.state.bookSelected)
    } 
  }


  render() {
    return (
      <>
        <Row>
          <Col>
            <Form.Group>
              <Form.Label>Search a book</Form.Label>
              <Form.Control
                type="text"
                placeholder="Search here"
                value={this.state.searchQuery}
                onChange={(e) => this.setState({ searchQuery: e.target.value })}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          {this.props.books
            .filter((b) =>
              b.title.toLowerCase().includes(this.state.searchQuery)
            )
            .map((b) => (
              <Col xs={12} md={4} key={b.asin}>
                <SingleBook 
                book={b}
                asin={b.asin}
                parentCallBack={this.setSelected}
                 />
              </Col>
            ))}
        </Row>
      </>
    )
  }
}

export default BookList
