import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import InsertProduct from './pages/InsertProduct'
import Header from './components/Header'
import ShowProducts from './pages/ShowProducts'

export default function App() {
  return (

    <Router>
      <div className='container mt-5'>
        <Header/>
        <Switch>
          <Route path='/' exact component={ShowProducts} />
          <Route path='/add-product' component={InsertProduct} />
        </Switch>
      </div>
    </Router>
  )
}
