import React,{Component} from "react";
import './App.css'
import Header from "./components/Header/Header";
import List from "./components/List/List";
import Footer from "./components/Footer/Footer";
//创建外壳组件
class App extends Component {
    state={
        todos:[
            {id:'01',name:'睡觉',done:true},
            {id:'02',name:'吃饭',done:false},
            {id:'03',name:'打游戏',done:true},
            {id:'04',name:'逛街',done:true},
        ]
    };
    addTodo=(addName)=>{
        console.log('App',addName,)
        const {todos}=this.state
        const add={id:todos.length+1,name:addName,done:false}
        // console.log(add.id)
        this.setState({todos:[add,...todos]})
    }
    checkedTodo=(id,done)=>{
        const {todos}=this.state
        const newTodos=todos.map((todo)=>{
            if(todo.id===id) {
                return {...todo,done}
            }else{
                return todo
            }
            
        })
        this.setState({todos:newTodos})
    }
    deleteTodo=(id)=>{
        const {todos}= this.state
        const deleteTodo=todos.filter((todo)=>{
            return todo.id!==id
        })
        this.setState({todos:deleteTodo})
    }
    render() {
        const {todos} = this.state;
        return (
            <div className="todo-container">
                <div className="todo-wrap">
                    <Header addTodo={this.addTodo}/>
                    <List todos={todos} checkedTodo={this.checkedTodo} DeleteTodo={this.deleteTodo}/>
                    <Footer todos={todos} handleCheckAll={this.handleCheckAll} deleteAllDone={this.deleteAllDone}/>
                </div>
          </div>
        )
    }  
    //用于全选
    handleCheckAll=(done)=>{
        const {todos} = this.state;
        const newTodos=todos.map((todo)=>{
            return {...todo,done}
        })
        this.setState({todos:newTodos})
    }
    //清除已完成
    deleteAllDone=()=>{
        const {todos} = this.state
        const newTodos=todos.filter((todo)=>{
            return todo.done!==true
        })
        this.setState({todos:newTodos})
    }
}
export default App;