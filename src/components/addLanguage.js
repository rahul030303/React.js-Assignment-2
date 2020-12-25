import React,{Component} from 'react';
import {ReactDOM} from 'react-dom';
import axios from 'axios';

export class addLanguage extends Component{

    constructor(props){
        super(props);
        this.state={
            language:""
        }
        this.handleChange=this.handleChange.bind(this);
        this.addLanguage=this.addLanguage.bind(this);
    }

    addLanguage=(e)=>{
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
        const {language}= this.state;
        return (
            <div>
            <h3>Add  Languages</h3>
            <form onSubmit={this.addLanguage}>
            <input type = "text" placeholder="language" value={language} name="language" onChange={this.handleChange}></input><br></br><br></br>
            <button type="submit">Add Language</button>
            </form>
            </div>
        )
    }
}
