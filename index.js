/**
 * @format
 */
import React, { Component } from 'react';
import {AppRegistry} from 'react-native';
import { Todo } from './App';

const Main = () => (<Todo />)
// class Main extends Component{
//     render(){
//         return(
//             <Todo />
//         )
//     }
// }

AppRegistry.registerComponent("todo", () => Main);
