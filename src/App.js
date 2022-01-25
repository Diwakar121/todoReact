import './App.css';
import Header from './components/Header';
import CreateToDo from './components/CreateToDo';
import React, { Component } from 'react';
import ShowTodos from './components/ShowTodos';



export default class App extends Component {

constructor(){
 super();
  this.state={todoList:[]}
  
}
updateListWith =(task)=>{
  console.log(task);
  let tempList =[task,...this.state.todoList];
   
  this.setState({todoList:tempList});

}
componentDidUpdate=()=>{
  console.log("updating");
  console.log(this.state.todoList);
}
componentDidMount=()=>{
  console.log("InitialList");
}
deleteTaskAt =(indx)=>{
let l= this.state.todoList.length;
let tempList1 = this.state.todoList.slice(0,indx);
let templist2 = this.state.todoList.slice(indx+1,l);

this.setState({todoList:[...tempList1,...templist2]});
 
}

  render() {
    return(
      <div className="App">
      <Header/>
      <CreateToDo updateListWith={this.updateListWith}/>
      <ShowTodos todoList={this.state.todoList} deleteTaskAt={this.deleteTaskAt}/>

    </div>
    );;
  
  }
}


