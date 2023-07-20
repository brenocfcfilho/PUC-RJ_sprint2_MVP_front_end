import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import Cidade2 from './views/cidade2'
import Cidade1 from './views/cidade1'
import TelaInicialMapa from './views/tela-inicial-mapa'

const App = () => {
  return (
    <Router>
      <div>
        <Route component={Cidade2} exact path="/cidade2"/>
        <Route component={Cidade1} exact path="/cidade1"/>
        <Route component={TelaInicialMapa} exact path="/"/>
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
