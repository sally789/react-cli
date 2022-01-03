import React, { Component } from 'react'
import pubSub from 'pubsub-js'
import axios from 'axios'
export default class Seach extends Component {
    render() {
        return (
            <div>
                <section className="jumbotron">
                    <h3 className="jumbotron-heading">Search Github Users</h3>
                    <div>
                        <input ref={(c)=>this.keyWordElement=c} type="text" placeholder="enter the name you search"/>&nbsp;
                        <button onClick={this.search}>Search</button>
                    </div>
                </section>
            </div>
        )
    }
    search=()=>{
    //获取用户输入
    // console.log(this)
    //发送请求前更新转态
        pubSub.publish('NewState',{isFirst:false,isLoading:true})
    // this.props.updateAppState({isFirst:false,isLoading:true});
    //发送网络请求
        axios.get(`http://localhost:3001/api1/search/users?q=${this.keyWordElement.value}`).then(
            response=>{
                // this.props.updateAppState({isLoading:false,users:response.data.items})
                pubSub.publish('NewState',{isLoading:false,users:response.data.items})
            },
            error=>{
                // this.props.updateAppState({err:error.message})
                pubSub.publish('NewState',{err:error.message})
            }
        )

    }
}
