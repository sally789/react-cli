import React, { Component } from 'react'
import './Footer.css'
export default class Footer extends Component {
    render() {
        const {todos}=this.props
        const doneCount=todos.reduce((prev, todo)=>{return prev+(todo.done?1:0)},0)
        return (
            <div className="todo-footer">
                <label>
                    <input type="checkbox" onChange={this.checkAllTodo} checked={doneCount===todos.length&&todos.length!==0?true:false}/>
                </label>
                <span>
                    <span>已完成{doneCount}</span> / 全部{todos.length}
                </span>
                <button onClick={this.clearAllDone} className="btn btn-danger">清除已完成任务</button>
            </div>
        )
    }
    //全选的回调
    checkAllTodo=(event)=>{
        this.props.handleCheckAll(event.target.checked)
    }
    //清除所有已完成的
    clearAllDone=()=>{
        this.props.deleteAllDone()
    }
}
