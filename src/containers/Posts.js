import React, { Component } from 'react'
import { connect } from 'react-redux'
import queryString from 'query-string'

import { fetchPosts } from '../actions'

class Posts extends Component {
  componentDidMount () {
    this.props.dispatch(fetchPosts(this.getUserId()))
  }

  getUserId () {
    const query = queryString.parse(this.props.location.search)
    return query.uid
  }

  render () {
    const { posts } = this.props

    return (
      <div className='posts'>
        <h2>Posts</h2>
        { posts === null ? '正在获取文章列表...'
          : posts.map(post => (
            <li key={post.id}>{post.title}</li>
          )) }
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    posts: state.posts
  }
}

export default connect(mapStateToProps)(Posts)
