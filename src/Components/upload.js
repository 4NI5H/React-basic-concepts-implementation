import {Component} from 'react'
import profile from '../images/profile.png'

class Upload extends Component{
    constructor() {
        super()
        this.setphoto = this.setphoto.bind(this)
        }
    
   setphoto(event)
   {
    event.preventDefault();
    const x=event.target.elements.photo.value
    this.props.onsetphoto(x)
}

render()
{ return(
    <div>
    <h3>Upload your Photo</h3>
    <div className="centre">
    <img className="photo" src={profile}/>
    </div>
    <form  className="Form" onSubmit={this.setphoto}>
    <input className="Input" type="file" name="photo" placeholder="Photo"/>
    <button className="Button">Submit</button>
    </form>
    </div>
)
}
}
export default Upload