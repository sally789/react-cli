import React, { Component } from 'react'
import {NavLink,Route,Redirect,Switch } from 'react-router-dom'
import Header from './components/Header/Header'
import About from './pages/About/About'
import Home from './pages/Home/Home'
export default class App extends Component {
    render() {
        return (
            <div>
                <div className="row">
                <div className="col-xs-offset-2 col-xs-8">
                    <Header/>
                </div>
                </div>
                <div className="row">
                <div className="col-xs-2 col-xs-offset-2">
                    <div className="list-group">
                    {/* 原生HTML中用<a>跳转 */}
                    {/* <a className="list-group-item" href="./about.html">About</a>
                    <a className="list-group-item active" href="./home.html">Home</a> */}

                    {/* 在react中靠路由链接 */}
                    {/* NavLink 默认加上activeClassName="active"（点谁，谁加一个active的类名 */}
                    <NavLink className="list-group-item" to='/about'>About</NavLink>
                    <NavLink className="list-group-item" to='/home'>Home</NavLink>
                    </div>
                </div>
                <div className="col-xs-6">
                    <div className="panel">
                    <div className="panel-body">
                        {/* 注册路由 5.0.1*/}
                        <Switch>
                            <Route path="/about" component={About}/>
                            <Route path="/home" component={Home}/>
                            <Redirect to="/about"/>
                        </Switch>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        )
    }
}

