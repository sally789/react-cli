import React, { Component } from 'react';
import Seach from './components/Seach/Seach';
import List from './components/List/List';
export default class App extends Component {
    state={
        users:[],//用于储存seach请求的数据
        isFirst:true ,//是否为第一次打开
        isLoading:false,//是否在加载中
        err:'',//储存错误信息
    }//初始化状态
    //更新app的状态
    updateAppState=(state)=>{
        this.setState(state);
    }
    render() {
        return (
            <div>
                <div className="container">
                    <Seach updateAppState={this.updateAppState}/>
                    <List {...this.state}/>
                </div>
            </div>
        )
    }
}
