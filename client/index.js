import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import store, { history } from './store'
import { Router, Route, IndexRoute } from 'react-router'
import injectTapEventPlugin from 'react-tap-event-plugin'

import App from './App'
import Home from './containers/Home'
import SignUp from './containers/SignUp'
import SignIn from './containers/SignIn'
import NotFound from './containers/NotFound'
import Notesboard from './containers/Notesboard'
import NoteShow from './containers/NoteShow'
import CategoryShow from './containers/CategoryShow'
import CreateNote from './components/CreateNote'

injectTapEventPlugin()

render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="sign-in" component={SignIn} />
        <Route path="sign-up" component={SignUp} />
        <Route path="notes/:noteId" component={NoteShow} />
        <Route path="categories/:categoryId" component={CategoryShow} />
        <Route path="categories/:categoryId/create-note" component={CreateNote} />
        <Route path="*" component={NotFound}/>
      </Route>
    </Router>
  </Provider>,
document.getElementById('root'))
