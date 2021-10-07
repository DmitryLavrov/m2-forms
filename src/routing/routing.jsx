import React from 'react'
import {Redirect, Route, Switch} from 'react-router-dom'

import Card from '../components/card'
import Form from '../components/form'

const Routing = ({...rest}) => {
  return (
    <Switch>
      <Route path="/card"><Card {...rest}/></Route>
      <Route path="/form"><Form {...rest}/></Route>
      <Redirect to="/card"/>
    </Switch>
  )
}

export default Routing
