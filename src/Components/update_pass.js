import {Component} from 'react'

class Update_pass extends Component{
    constructor() {
        super()
        this.work = this.work.bind(this)
        }

    work(event){
        event.preventDefault();
        const password = event.target.elements.Password.value
        const password1=event.target.elements.Password1.value
        const p1=password.length
        const p2=password1.length
       
        if(password)
        {
            if(p1<8)
            {
                document.getElementById("msg1").innerHTML="Password is too short"
            }
           
            if((password.localeCompare(password1)))
            {
                document.getElementById("msg").innerHTML="Password is not same"
            }

           else{
            this.props.onupdatepass(password);
           }
        }
       
    }

    render()
    {
        return (<div>
        <h3>Update Your Password</h3>
        <form  className="Form" onSubmit={this.work}> 
        <input className="Input" type ="text" placeholder="New Password" name="Password"/>
        <span style={{color:'red'}} id="msg1"></span>
        <input className="Input" type ="text" placeholder="Confirm Password" name="Password1"/>
        <span style={{color:'red'}} id="msg"></span>
        <button className="Button">Update</button>
        </form>
        </div>
        )
    }
} 
export default Update_pass