import React from 'react'
// import React ,{Component} from 'react'
import ReactDOM from 'react-dom'
//类式组件
// class Hooks extends Component {
//     componentWillMount() {
//         this.timer=setInterval(() => {
//             this.setState(state => ({count:state.count+1}))
//         },500)
//     }
//     componentWillUnmount(){
//         clearInterval(this.timer)
//     }
//     state={count:0}
//     render() {
//         return (
//             <div>
//                 <h2>Hooks</h2>
//                 <input type='text' ref={(c)=>this.input=c}/>
//                 <h3>当前求和为：{this.state.count}</h3>
//                 <button onClick={this.addState}>+1</button>
//                 <button onClick={this.remove}>卸载</button>
//                 <button onClick={this.show}>点击提示输入框内容</button>
//             </div>
//         )
//     }
//     show=()=>{
//         alert(this.input.value)
//     }
//     addState=()=>{
//         const {count} = this.state
//         this.setState({count:count+1})
//     }
//     remove=()=>{
//         ReactDOM.unmountComponentAtNode(document.getElementById('root'))
//     }
// }

//函数式组件//调用1+n次
function Hooks(){
    const [count,setCount]=React.useState(0)
    function addState(){
        return setCount(count+1);
    }
    //使用生命周期钩子//检测第二个数组的参数
    React.useEffect(()=>{
        let timer=setInterval(()=>{
            setCount(count=>count+1);
        },1000)
        return ()=>{
            clearInterval(timer);
        }
    },[])
    function remove(){
        ReactDOM.unmountComponentAtNode(document.getElementById('root'))
    }
    const myref=React.useRef();
    function show(){
        alert(myref.current.value)
    }
    return (
        <div>
            <h2>Hooks 函数组件</h2>
            <input type='text' ref={myref}/>
            <h3>当前求和为：{count}</h3>
            <button onClick={addState}>+1</button>
            <button onClick={remove}>卸载</button>
            <button onClick={show}>点击提示输入框内容</button>
        </div>
    )
}
export default Hooks
