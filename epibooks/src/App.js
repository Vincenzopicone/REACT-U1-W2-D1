import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import MyJumbotron from "./components/MyJumbotron";
import { Col, Container, Row } from "react-bootstrap";
import BookList from "./components/BookList";

import fantasy from "./data/fantasy.json";
import { Component } from "react";
import CommentArea from "./components/CommentArea";

class App extends Component {
  state = {
    asin: null,
  };

  setSelected = (value) => {
    this.setState({ asin: value });
  };

  render() {
    return (
      <Container>
        <MyNav />
        <MyJumbotron />
        <Container>
          <Row>
            <Col xs={7}>
              <BookList books={fantasy} parentCallback={this.setSelected} />
            </Col>
            <Col>
              <CommentArea className="col-6" asin={this.state.asin} />
            </Col>
          </Row>
        </Container>
        <MyFooter />
      </Container>
    );
  }
}

export default App;
