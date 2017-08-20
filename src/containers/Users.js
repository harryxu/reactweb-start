import React, { Component } from 'react'
import { connect } from 'react-redux'

import { fetchUsers } from '../actions'

class Users extends Component {
  componentDidMount () {
    this.props.dispatch(fetchUsers())
  }

  render () {
    const { users } = this.props
    return (
      <div className='users'>
        <h2>Users</h2>
        <ul>
          {
            users === null ? '正在获取用户列表...' : users.map(user => (
              <li key={user.id}>{user.name}</li>
            ))}
        </ul>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    users: state.users
  }
}

export default connect(
  mapStateToProps
)(Users)
