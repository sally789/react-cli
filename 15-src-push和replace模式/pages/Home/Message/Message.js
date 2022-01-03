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
                                    {/*一般默认push模式 后退到上一次点击界面 replace={true} 不留下痕迹 后退直接到News*/}
                                    <Link replace={true} to={{pathname:'/home/message/detail',state:{id: message.id,title: message.title}}}>{message.title}</Link>
                                </li>
                            )
                        })
                    }
                </ul>
                <hr/>
                {/* state参数无需声明 */}
                <Route path='/home/message/detail' component={Detail}/>
            </div>
        )
    }
}
