import React, { Component } from 'react'
import qs from 'querystring'//将urlencoded（key=value&key=value)转为其他
const details=[
    {id: '01',detail:'你好，1111'},
    {id: '02',detail:'你好，2222'},
    {id: '03',detail:'你好，3333'},
]
export default class Detail extends Component {
    render() {
        // 接收的search参数在this.props.location.search里
        console.log(this.props)
        const {search} = this.props.location
        const {id,title}=qs.parse(search.slice(1))//将urlencoded转化为对象
        const findDetail =details.find((detailObj) => {
            return detailObj.id===id
        })
        return (
            <ul>
                <li>{id}</li>
                <li>{title}</li>
                <li>{findDetail.detail}</li>
            </ul>
        )
    }
}
