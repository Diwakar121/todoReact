import React, { Component } from 'react';



class ShowTodos extends Component {

    indx=0;
        constructor(props){super(props);};
        
    onClickDeleteHandler =(e)=>{
        
        console.log(e.target.id);

        let indx= parseInt(e.target.id)
        this.props.deleteTaskAt(indx);
    }
    componentDidUpdate=()=>{
        this.indx=0;
     console.log("show update");

    }
    componentDidMount=()=>{
     console.log("show Mount");
    }
 getListTag=(task)=>{
    return ( <li key={this.indx++}className="list-group-item"><svg style={{float:"left",margin:"4px",marginRight:"8px"}} xmlns="http://www.w3.org/2000/svg" width="3vh" height="3vh" fill="currentColor" className="bi bi-arrow-right-circle-fill" viewBox="0 0 16 16">
    <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
  </svg><h4 style={{display:"inline",float:"left"}}>{`${task}`}</h4><button  className="btn  btn-sm btn-dark" style={{float:"Right"}} id={this.indx} onClick={this.onClickDeleteHandler}> delete</button></li>);}




    render() {
        console.log("rendeing showtodo");
        return (
            <div className="conatiner">
                
                <div className="row "style={{margin:"10px 20vw"}}>
                    <hr/>
                <h1>My Todos</h1>
                      <hr/>
<ul className="list-group">
{this.props.todoList.map(this.getListTag)}
</ul>
                
                </div>

            </div>
        );
    }
}

export default ShowTodos;

