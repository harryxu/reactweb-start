import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchSinglePost } from '../actions'

class Post extends Component {
  componentDidMount () {
    this.fetchPost(this.props.match.params.id)
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.match.params.id !== this.props.match.params.id) {
      this.fetchPost(nextProps.match.params.id)
    }
  }

  fetchPost (postId) {
    this.props.dispatch(fetchSinglePost(postId))
  }

  render () {
    const { post } = this.props
    return (
      <div className='post'>
        {post === null ? '正在加载文章...'
          : <div>
            <h2 className='title'>{post.title}</h2>
            <div className='body'>{post.body}</div>
          </div>
        }
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    post: state.currentPost
  }
}

export default connect(mapStateToProps)(Post)
