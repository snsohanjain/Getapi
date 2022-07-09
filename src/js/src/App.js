
import './App.css';
import{getAllStudents} from './client';
import React ,{ Component } from 'react';


class App extends Component{
  render(){
    getAllStudents().then(res => res.json().then(students => {
      console.log(students);
    }));
    return <h1>Hello World SpringBoot React </h1>
    
  }
}


export default App;
