import React,{Component} from 'react';
import {ReactDOM} from 'react-dom';
import axios from 'axios';

export class FetchData extends Component{

    constructor(props){
        super(props);
        this.state = {
            userId: "",
            title: "",
            body: ""
        };
    }

    showData=()=>{
        axios.get("https://jsonplaceholder.typicode.com/posts/1")
        .then(res=>{
            console.log(res.data);
            this.setState({
                userId:res.data.userId,
                title:res.data.title,
                body:res.data.body
            })
                }).catch(err=>console.log(err))
    };



    render(){
        const {userId,title,body}=this.state;
        return(
            <div>
                <h2>User Data</h2>
                <ul>
                <li><h4>User Id: {this.state.userId}</h4></li>
                <li><h4>Title: {this.state.title}</h4></li>
                <li><h4>Body: {this.state.body}</h4></li>
                </ul>
                
                <button onClick={this.showData}>show user data</button>
                
            </div>
        )
    }
}

