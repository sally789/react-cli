import React, { Component } from 'react';
import Seach from './components/Seach/Seach';
import List from './components/List/List';
export default class App extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <Seach/>
                    <List/>
                </div>
            </div>
        )
    }
}
