import React, { Component } from 'react'
import './Item.css'
export default class Item extends Component {
    state={
        mouse:false,//鼠标移入移除

    }
    render() {
        const {id,name,done} = this.props
        return (
            <div>
                <li style={{backgroundColor:this.state.mouse?'#ddd':'#fff'}} onMouseEnter={this.handleMouse(true)} onMouseLeave={this.handleMouse(false)}>
                    <label>
                        <input type="checkbox" onChange={this.handleCheck(id)} checked={done}/>
                        <span>{name}</span>
                    </label>
                    <button onClick={this.handleDelete(id)} style={{display:this.state.mouse?'block':'none'}} className="btn btn-danger">删除</button>
                </li> 
            </div>
        )
    }
    //删除TODO
    handleDelete=(id) =>{
        return ()=>{
            if(window.confirm('Are you sure you want to delete')){
                this.props.DeleteTodo(id)
            }
        }
        
        
    }
    handleCheck=(id)=>{
        return (event)=>{
            this.props.checkedTodo(id,event.target.checked)
            // console.log(event.target.checked)
            // console.log(id)
        }
    }
    //鼠标移入移除，改变style
    handleMouse=(flag)=>{
        //柯理化,阻止一上来就取值
        return ()=>{
            // console.log(flag);
            this.setState({mouse:flag});
        }
    }
}
