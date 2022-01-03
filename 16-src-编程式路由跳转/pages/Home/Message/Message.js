import React, { Component } from 'react'
import { Link,Route } from 'react-router-dom';
import Detail from './Detail/Detail'
export default class Message extends Component {
    state={messageArr:[
        {id:'01',title: '消息1'},
        {id:'02',title: '消息2'},
        {id:'03',title: '消息3'}
    ]}
    replaceShow=(id,title)=>{
        this.props.history.replace(`/home/message/detail/${id}/${title}`)
    }
    pushShow=(id,title)=>{
        this.props.history.push(`/home/message/detail/${id}/${title}`)
    }
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
        const {messageArr} = this.state;
        return (
            <div>
                <ul>
                    {
                        messageArr.map((message) =>{
                            return (
                                <li key={message.id}>
                                    {/* 通过点击事件跳转路由*/}
                                    {/* <Link to={`/home/message/detail/${message.id}/${message.title}`}>{message.title}</Link> */}
                                    <button onClick={()=>this.pushShow(message.id,message.title)}>push查看</button>
                                    <button onClick={()=>this.replaceShow(message.id,message.title)}>replace查看</button>
                                </li>
                            )
                        })
                    }
                </ul>
                <hr/>
                <Route path='/home/message/detail/:id/:title' component={Detail}/>
                <button onClick={this.goBack}>后退</button>
                <button onClick={this.goForward}>前进</button>
                <button onClick={this.go}>前进n步</button>
            </div>
        )
    }
}
