import React, { Component } from 'react'
import { Link,Route } from 'react-router-dom';
import Detail from './Detail/Detail'
export default class Message extends Component {
    state={messageArr:[
        {id:'01',title: '消息1'},
        {id:'02',title: '消息2'},
        {id:'03',title: '消息3'}
    ]}
    render() {
        const {messageArr} = this.state;
        return (
            <div>
                <ul>
                    {
                        messageArr.map((message) =>{
                            return (
                                <li key={message.id}>
                                    {/* 向路由组件Detail传递search参数*/}
                                    <Link to={`/home/message/detail/?id=${message.id}&title=${message.title}`}>{message.title}</Link>
                                </li>
                            )
                        })
                    }
                </ul>
                <hr/>
                {/* search参数无需声明 */}
                <Route path='/home/message/detail' component={Detail}/>
            </div>
        )
    }
}
