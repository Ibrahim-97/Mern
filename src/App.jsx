import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Nav from './components/layouts/Nav'
import Welcome from './components/pages/Welcome'
import About from './components/pages/About'
import Contact from './components/pages/Contact'
import NotFound from './components/pages/NotFound'



const App = () => {
    return (
        <div className="App">

            <Nav />

            <div className="container mx-auto px-4">

                <Switch>
                    <Route exact path="/" component={Welcome} />
                    <Route exact path="/about" component={About} />
                    <Route exact path="/contact" component={Contact} />
                    <Route path="*" component={NotFound} />
                </Switch>

            </div>
        </div>
    )
}

export default App

