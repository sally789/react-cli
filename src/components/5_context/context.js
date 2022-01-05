import React, { Component } from 'react'

//传给A组件里的所有组件，使用时需要声明
const UserNameContext=React.createContext()
const {Provider,Consumer}=UserNameContext
export default class A extends Component {
    state={username:'AA'}
    render() {
        return (
            <div>
                <h2>Context 适用于隔辈传参</h2>
                <h3>我是A组件，我里面有B组件</h3>
                <h4>我接受到A组件传递的：{this.state.username}</h4>
                {/* <B username={this.state.username}/> */}
                <Provider value={this.state.username}>
                    <B />
                </Provider>
                
            </div>
        )
    }
    
}
class B extends Component{
    //声明想要A组件的username
    static contextType = UserNameContext
    render() {
        return (
            <div>
                <h3>我是B组件,我里面有C组件</h3>
                {/* <h4>我接受到A组件传递的：{this.props.username}</h4> */}
                <h4>我接受到A组件传递的：{this.context}</h4>
                <C/>
            </div>
        )
    }
}
// class C extends Component{
//     //声明想要A组件的username//可以不通过B
//     static contextType = UserNameContext
//     render() {
//         return (
//             <div>
//                 <h3>我是c组件</h3>
//                 <h4>我接受到A组件传递的：{this.context}</h4>
//             </div>
//         )
//     }
// }
function C(){
    return (
        <div>
            <h3>我是c组件</h3>
            
            <Consumer>
                {
                    value=>{
                        // console.log(value);
                        return <h4>我接受到A组件传递的：{value}</h4>
                    }
                }
            </Consumer>
        </div>
    )
}