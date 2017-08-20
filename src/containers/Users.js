import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

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
              <li key={user.id}>
                <Link to={`posts?uid=${user.id}`}>{user.name}</Link>
              </li>
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
