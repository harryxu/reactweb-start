import React, { Component } from 'react'
import { connect } from 'react-redux'

class Users extends Component {
  render () {
    return (
      <div className='users'>
        Users
      </div>
    )
  }
}

export default connect()(Users)
