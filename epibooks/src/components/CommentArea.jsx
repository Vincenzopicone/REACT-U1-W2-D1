import { Component } from 'react'
import CommentList from './CommentList'
import Loading from './Loading'
import Error from './Error'

class CommentArea extends Component {
  state = {
    comments: [],
    isLoading: true,
    isError: false,
  }

  componentDidMount = async () => {
    try {
      let response = await fetch(
        'https://striveschool-api.herokuapp.com/api/comments/' +
          this.props.asin,
        {
          headers: {
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2VhM2ZhZjVmZTk4NDAwMTM0ZDNkNzMiLCJpYXQiOjE2NzYyOTYxMTEsImV4cCI6MTY3NzUwNTcxMX0.Bl36Tp7KHdDJ3-K8SmzGG3_FUzAnkYyf7mV61OfFjQQ',
          },
        }
      )
      if (response.ok) {
        let comments = await response.json()
        this.setState({ comments: comments, isLoading: false, isError: false })
      } else {
        this.setState({ isLoading: false, isError: true })
      }
    } catch (error) {
      this.setState({ isLoading: false, isError: true })
    }
  }

  render() {
    return (
      <div className="text-center">
        {this.state.isLoading && <Loading />}
        {this.state.isError && <Error />}
        <CommentList commentsToShow={this.state.comments} />
      </div>
    )
  }
}

export default CommentArea
