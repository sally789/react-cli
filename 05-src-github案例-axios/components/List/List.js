import React, { Component } from 'react'
import './List.css'
export default class List extends Component {
    render() {
        const {isFirst,isLoading,users,err} = this.props
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
