import React, { Component } from 'react'
import { connect } from 'react-redux'

class Posts extends Component {
  render () {
    return (
      <div className='posts'>
        Posts
      </div>
    )
  }
}

export default connect()(Posts)
