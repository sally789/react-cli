import React, { Component } from 'react'
import axios from 'axios'

export default class App extends Component {
    render() {
        return (
            <div>
                <button onClick={this.getStudents}>获取学生数据</button>
                <button onClick={this.getCar}>获取汽车数据</button>
            </div>
        )
    }
    getStudents=() =>{
        axios.get('http://localhost:3001/api1/students').then(
            response =>{console.log('成功',response.data)},
            err =>{console.log('失败',err)}
        )
    }
    getCar=() =>{
        axios.get('http://localhost:3001/api2/cars').then(
            response =>{console.log('成功',response.data)},
            err =>{console.log('失败',err)}
        )
    }
}
