import React, { Component } from 'react'
import pubSub from 'pubsub-js'
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
    search=async()=>{
        pubSub.publish('NewState',{isFirst:false,isLoading:true})
        // fetch(`http://localhost:3001/api1/search/users?q=${this.keyWordElement.value}`).then(
        //     response => {
        //         console.log('联系服务器成功')
        //         return response.json()
        //     }           
        // ).then(
        //     response => {
        //         console.log('获取数据成功',response)
        //         pubSub.publish('NewState',{isLoading:false,users:response.items})
        //     },
        // ).catch(
        //     (error) => {
        //         console.log('出错',error)
        //         pubSub.publish('NewState',{err:'出错了'})
        //     }
        // )
        //优化
        try {
            const response =await fetch(`http://localhost:3001/api1/search/users?q=${this.keyWordElement.value}`)
            const data=await response.json()
            pubSub.publish('NewState',{isLoading:false,users:data.items})
            console.log(data)
        }catch{
            pubSub.publish('NewState',{err:'出错了'})
        }
        
    }
}
