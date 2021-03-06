import React, { Component } from 'react'
import { connect } from 'react-redux'
import queryString from 'query-string'
import { Route, Link } from 'react-router-dom'

import { fetchPosts } from '../actions'
import Post from './Post'

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
    const uid = this.getUserId()

    return (
      <div className='posts'>
        <div className='posts-list'>
          <h2>Posts</h2>
          {posts === null ? '正在获取文章列表...'
            : posts.map(post => (
              <li key={post.id}>
                <Link to={`/posts/${post.id}?uid=${uid}`}>{post.title}</Link>
              </li>
            ))}
        </div>

        <Route path='/posts/:id' component={Post} />
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
