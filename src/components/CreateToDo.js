import React, { Component } from 'react';


class CreateToDo extends Component {
constructor(props)
{
    super(props);
    this.state={task:""};
}

onChangeHandler =(e)=>{

    console.log(e);
 this.setState({task:e.target.value});
} 
onClickAddBtn=(e)=>{
  
document.getElementById("task").value="";
    e.preventDefault();

    if(this.state.task.length===0){
       alert("task can not be blank");
        return;
    }

    this.setState({task:""});
    
    
    this.props.updateListWith(this.state.task);
}
    render() {
        return (
            <div clasName="container ">
                <div className="row">

                <form  style={{marginTop:"10vh"}}  >
                    <h1>Enter Your Task</h1>
                    <input type="text" name="task"id="task" placeholder="task ...cycling.." onChange={this.onChangeHandler}></input>
                    <button type="submit" className="btn btn-dark mx-3" onClick={this.onClickAddBtn}>Add ToDo</button>
                </form>

                </div>
                
            </div>
        );
    }
}

export default CreateToDo;