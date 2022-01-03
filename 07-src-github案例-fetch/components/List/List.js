import React, { Component } from 'react'
import pubSub from 'pubsub-js'
import './List.css'
export default class List extends Component {
    state={
        users:[],//用于储存seach请求的数据
        isFirst:true ,//是否为第一次打开
        isLoading:false,//是否在加载中
        err:'',//储存错误信息
    }//初始化状态
    componentDidMount() {
        pubSub.subscribe('NewState',(msg,data) => {
            this.setState(data)
        })
    }
    render() {
        const {isFirst,isLoading,users,err} = this.state;
        return (
            <div>
                {
                    isFirst ?<h2>欢迎使用</h2>:isLoading ?<h2>LOADING.....</h2>:err?<h2>{err}</h2>:
                    users.map((user)=>{
                        return (
                            <div className="card" key={user.id}>
                                <a href={user.html_url} target="_blank" rel="noreferrer">
                                <img alt="avatar" src={user.avatar_url} style={{width: '100px'}}/>
                                </a>
                                <p className="card-text">{user.login}</p>
                            </div>
                        )
                    })
                }
                
            </div>
        )
    }
}
