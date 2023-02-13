import { Component } from 'react'
import { Card } from 'react-bootstrap'
/* import Book from './CommentArea' */

class SingleBook extends Component {

  render() {
    return (
      <>
        <Card
          onClick={() => this.setSelected(true)} /* => this.setState({ selected: !this.state.selected } */
          style={{ border: this.setSelected=== true ? '3px solid red' : 'none' }}
        >
          <Card.Img variant="top" src={this.props.book.img} />
          <Card.Body>
            <Card.Title style={{ color: 'black' }}>
              {this.props.book.title}
            </Card.Title>
          </Card.Body>
        </Card>
      {/*   {this.state.selected && <CommentArea asin={this.props.book.asin} />} */}
      </>
    )
  }
}

export default SingleBook
