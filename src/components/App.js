import { h, Component } from 'preact'
import { Router } from 'preact-router'
// eslint-disable-next-line no-unused-vars
import Menu from './Menu'

// Code-splitting is automated for routes
import Login from '../routes/Login'
import Home from '../routes/Home'
import Profile from '../routes/Profile'
import { Provider } from 'mobx-react'
import { rootStore } from '../store/rootStore'

export default class App extends Component {
  /** Gets fired when the route changes.
   *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
   *	@param {string} event.url	The newly routed URL
   */
  handleRoute = (e) => {
    console.log(e, 'routeChanged')
    this.currentUrl = e.url
  }

  render() {
    return (
      <Provider rootStore={rootStore}>
        <div id="app" class="flex">
          <Menu />
          <Router onChange={this.handleRoute}>
            <Login path="/login" />
            <Home path="/" />
            <Profile path="/profile/" user="LOL" />
            <Profile path="/profile/:user" />
          </Router>
        </div>
      </Provider>
    )
  }
}
