import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'//（一般组件使用路由组件的API）

class Header extends Component {
    goBack=()=>{
        this.props.history.goBack()
    }
    goForward=(id,title)=>{
        this.props.history.goForward()
    }
    go=()=>{
        this.props.history.go(2)
    }
    render() {
        return (
            <div>
                <div className="page-header"><h2>React Router Demo</h2>
                <button onClick={this.goBack}>后退</button>
                <button onClick={this.goForward}>前进</button>
                <button onClick={this.go}>前进n步</button>
                </div>
                
            </div>
        )
    }
}
export default withRouter(Header)//返回一个新组件//header组件使用路由组件的API（this.props.history.go...）
