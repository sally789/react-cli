import React, { Component } from 'react'

export default class Demo extends Component {
    state={count:0}
    render() {
        return (
            <div>
                <h2>setState传函数</h2>
                <h3>当前求和为{this.state.count}</h3>
                <button onClick={this.addState}>加一</button>
            </div>
        )
    }
    addState=()=>{
        //对象式
        // const {count} = this.state
        // this.setState({count:count+1},()=>{
        //     console.log(this.state.count)//1
        // })
        // console.log(this.state.count)//0
        
        //函数式
        this.setState((state,props)=>{
            console.log(state,props)
            return {count:state.count+1}
        })
    }
}
