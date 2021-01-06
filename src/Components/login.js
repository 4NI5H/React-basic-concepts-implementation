import {Component} from 'react'
import axios from 'axios'
import {Redirect} from 'react-router-dom'


class Login extends Component{
    constructor() {
        super()
        this.press = this.press.bind(this)
        this.transition=this.transition.bind(this)
        }

        transition(event)
        {
            document.getElementById("msg").innerHTML=""   
        }
     async press(event){
        event.preventDefault();
        const userName = event.target.elements.Email_Id.value
        const password = event.target.elements.Password.value
        const p=password.length
        const a=this.props.pass
        
        if(userName){
          if(password=="")
        {
            document.getElementById("msg").innerHTML="enter password"
        }
        else if (p<8)
        {
            document.getElementById("msg").innerHTML="Password is too short"
        }
        else if(password!=a){

            document.getElementById("msg").innerHTML="Password is incorrect"
        }
        else {
            const token=await axios.post("http://localhost:5000/api/user/login")

            

        this.props.onputusername(userName)
    
         
        }
    }}


    render()
    {
        return (
            <div>
            <h3>Login Page</h3>
            <form  className="Form" onSubmit={this.press}> 
            <input className="Input" type ="text" onChange={this.transition} placeholder="userName" id="email" name="Email_Id"/>
            <input className="Input" type="text" onChange={this.transition} placeholder="Password"  id="pass" name="Password"/>
            <span style={{color:'red'}} id="msg"></span>
            <button className="Button" to="/Profile">Login</button>
            </form>
            </div>
        )
    }
} 

export default Login