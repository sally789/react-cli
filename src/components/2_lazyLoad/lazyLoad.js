import React, { Component,lazy,Suspense} from 'react'
import {NavLink,Route } from 'react-router-dom'

// import About from './about/About'
// import Home from './home/Home'

const Home=lazy(()=>{
    import('./home/Home')
})
const About=lazy(()=>import('./about/About'))

export default class LazyLoad extends Component {
    render() {
        return (
            <div>
                <h2>Lazy Load</h2>
                <NavLink to='/home'>Home</NavLink>
                <br/>
                <NavLink to='/about'>About</NavLink>
                <Suspense fallback={<h1>Loading...</h1>}>
                    <Route path='/home' component={Home}/>
                    <Route path='/about' component={About}/>
                </Suspense>
                
            </div>
        )
    }
}
