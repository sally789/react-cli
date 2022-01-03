import React, { Component } from 'react'

const details=[
    {id: '01',detail:'你好，1111'},
    {id: '02',detail:'你好，2222'},
    {id: '03',detail:'你好，3333'},
]
export default class Detail extends Component {
    render() {
        // 接收的参数在this.props.match.params里
        console.log(this.props)
        const {id,title} = this.props.match.params
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
