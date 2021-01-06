import {Component} from 'react'
import {Redirect} from 'react-router-dom'

class Update extends Component{
    constructor(props) {
        super(props)
        this.change = this.change.bind(this)
        this.remove=this.remove.bind(this)
        this.transition=this.transition.bind(this)

      
        }

        transition(event)
        {
            document.getElementById("msg").innerHTML="" 
            document.getElementById("msg1").innerHTML=""  
        }

    change(event){
        event.preventDefault();
        const password = event.target.elements.Password.value
        const password1=event.target.elements.Password1.value
        const image=event.target.elements.photo.value
        const p1=password.length
        
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
        if(image){
        this.props.onsetphoto(image)
        }
    
    }

    remove(event)
    {
        event.preventDefault();
        this.props.ondeletepassword();
    }



    render()
    {
         

        return (<div>
        <h3>Update Your Profile</h3>
        <form  className="Form" onSubmit={this.change}> 
        
        <input className="Input" type="text" name="photo" placeholder="Enter URL of image"/>
        <input className="Input" type ="text" onChange={this.transition} placeholder="New Password" name="Password"/>
        <span style={{color:'red'}} id="msg1"></span>
        <input className="Input" type ="password" onChange={this.transition} placeholder="Confirm Password" name="Password1"/>
        <span style={{color:'red'}} id="msg"></span>
        <button className="Button">Update</button>
        </form>
        <form className="Form" onSubmit={this.remove}>
        <button className="Button">Delete</button>
        </form>
        </div>
        )
    }
} 
export default Update