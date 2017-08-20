import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import Users from './containers/Users'
import Posts from './containers/Posts'

class App extends React.Component {
  render () {
    return (
      // 如果网站部署在一个子目录中，修改basename来设置路由的开始路径
      <Router basename='/'>
        <div className='react-web-app'>
          <h1>React Web APP</h1>
          <div className='breadcrumbs'>
            <Link to='/'>users</Link>
          </div>

          <Route exact path='/' component={Users} />
          <Route path='/posts' component={Posts} />
        </div>
      </Router>
    )
  }
}

export default App
