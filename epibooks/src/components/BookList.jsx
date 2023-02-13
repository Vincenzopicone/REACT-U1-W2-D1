import { Component } from 'react'
import CommentArea from './CommentArea'
import SingleBook from './SingleBook'

import {Container, Col, Form, Row } from 'react-bootstrap'

class BookList extends Component {
  state = {
    searchQuery: '',
    selected: true,
    asin:""
  }

  setSelected = (value) => {
    this.setState(
      {selected:value})
  }


  render() {
    return (
      <>
       <Container md={6}>
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
                 />
              </Col>
            ))}
        </Row>
        </Container>
        <Container md={6}>
        <CommentArea asin={this.state.asin}/>
        </Container>
      </>
    )
  }
}

export default BookList
