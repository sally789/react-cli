import React, { Component } from 'react'
import Demo from './components/1_setState/setState'
import LazyLoading from './components/2_lazyLoad/lazyLoad'
import Hooks from './components/3_hooks/Hooks'
import FragmentDemo from './components/4_fragment/Fragment'
import A from './components/5_context/context'
export default class App extends Component {
  render() {
    return (
      <div>
        <Demo/>
        <hr/>
        <LazyLoading/>
        <hr/>
        <Hooks/>
        <hr/>
        <FragmentDemo/>
        <hr/>
        <A/>
      </div>
    )
  }
}

