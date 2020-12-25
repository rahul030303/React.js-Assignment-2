import React,{Component} from 'react';
import {ReactDOM} from 'react-dom';
import axios from 'axios';

export class Dashboard extends Component{

    constructor(props){
        super(props);
        this.state={
            userId:"",
            title:"",
            body:""
        }
        this.handleChange=this.handleChange.bind(this);
        this.addData=this.addData.bind(this);
    }

    addData=(e)=>{
        e.preventDefault()
        console.log(this.state);
        axios.post("https://jsonplaceholder.typicode.com/posts", this.state)
        .then(response=>console.log(response))
        .catch(error=>console.log(error))
    }

    handleChange=(event)=>{
        this.setState({[event.target.name]:event.target.value});
        // console.log(this.state.language);
    }

    render(){
        const {userId, title,body}= this.state;
        return (
            <div>
            <h3>Add  Data</h3>
            <form onSubmit={this.addData}>
            <input type = "text" placeholder="userId" value={userId} name="userId" onChange={this.handleChange}></input><br></br><br></br>
            <input type = "text" placeholder="title"  value={title}    name="title" onChange={this.handleChange}></input><br></br><br></br>
            <input type = "text" placeholder="body"   value={body}  name="body" onChange={this.handleChange}></input>
            <br></br><br></br>
            <button type="submit">Add Data</button>
            </form>
         
            </div>
        )
    }
}

// export default Dashboard;

