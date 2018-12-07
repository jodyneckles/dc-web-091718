import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css';
import { Provider } from 'react-redux'
import store from './redux/store'
import App from './Components/App'

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));



//High Order component is a function that takes in
//SomeComponent returns an exact copy of that Component but with extra props
//return an exact copy of this Header component with with an extra props color="blue"

// const withBlue = (Component) => {
//   const EnhancedComponent = () => {
//     return <Component color="blue"/>
//   }
//   return EnhancedComponent
// }
// const BlueHeader = withBlue(Header)

// const withCount = (Component) => {
//   const EnhancedComponent = (props) => {
//     return <Component {...props} count={store.getState().count)}>
//   }
//   return EnhancedComponent
// }
// const HeaderWithCount = withCount(Header)

//connect is a function that returns a HighOrderComponent
//connect takes in another function, that specific what props the high order component should have
// const withCount = connect(/*I can give you extra props, what props do you want?*/)
