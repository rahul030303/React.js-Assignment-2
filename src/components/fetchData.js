import React,{Suspense,lazy} from 'react';
import axios from 'axios';

const UserData = lazy(()=>import('./userData'));

class FetchData extends React.Component{

   constructor(props){
        super(props);
        this.state = {
            showUserData:false,
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
                showUserData:true,
                userId:res.data.userId,
                title:res.data.title,
                body:res.data.body
            })
                }).catch(err=>console.log(err))
    };




    render(){
        const {userId,title,body}=this.state;
        if(this.state.showUserData){
            return(
            
               <Suspense fallback={<h1>Loading...</h1>}>
               <UserData/>
                <div>
                
                 <ul>
                <li><h4>User Id: {this.state.userId}</h4></li>
                <li><h4>Title: {this.state.title}</h4></li>
                <li><h4>Body: {this.state.body}</h4></li>
                </ul>
                </div>
                </Suspense>
                
            )
        }else{
            return(
                <div>
                <h1>Show User Data</h1><br></br><br></br>
                <button onClick={this.showData}>show user data</button>
                </div>
            )
        }
    }
}
export default FetchData;

