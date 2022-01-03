import React, { Component } from 'react'
import PropTypes from 'prop-types'//限制props的类型
import './Header.css'
export default class Header extends Component {  
    //对接收的props进行类型限制
    static propTypes = {
        addTodo:PropTypes.func.isRequired
    }
    render() {
        return (
            <div className="todo-header">
                <input onKeyUp={this.handleKeyUp} type="text" placeholder="请输入你的任务名称，按回车键确认"/>
            </div>
        )
    }
    handleKeyUp=(event) => {
        console.log(event.keyCode)//回车13
        //判断添加的名字不能为空
        if(event.target.value.trim()===''){
            alert('输入不能为空')
            return
        }
        if(event.keyCode !== 13) return
        this.props.addTodo(event.target.value)
        event.target.value=''
    }
}
