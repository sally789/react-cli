import React, { Component } from 'react'
import {Button,TimePicker,Calendar } from 'antd'
import 'antd/dist/antd.css'
import {QuestionOutlined } from '@ant-design/icons'
import moment from 'moment';
function onPanelChange(value, mode) {
        console.log(value.format('YYYY-MM-DD'), mode);
    }
export default class App extends Component {
    render() {
        return (
            <div>
                <Button type="primary">Primary Button</Button>
                <QuestionOutlined />
                <TimePicker defaultValue={moment('12:08:23', 'HH:mm:ss')} size="large" />
                <Calendar onPanelChange={onPanelChange} />
            </div>
        )
    }
}
