import {Component} from 'react'
import Head from './head'
import Home from './home'
import Login from './login.js'
import {Route} from 'react-router-dom'
import Upload from './upload'
import Update from './update'
import messi from '../images/messi.jpg'
import Logout from './logout'
import Product from './product'
import AddProduct from './addproduct'

class Main extends Component{

    constructor(){
        
        super()
        let loggedin=false
        this.state={
            username:"",
            loggedin,
            profile_photo:messi,
            password:"asdfghjkl"
        }
    
    this.putpassword=this.putpassword.bind(this)
    this.deletepassword=this.deletepassword.bind(this)
    // this.updatefirstname=this.updatefirstname.bind(this)
    // this.updatelastname=this.updatelastname.bind(this)
    // this.putname=this.putname.bind(this)
    // this.putphoto=this.putphoto.bind(this)
    
    }
  

//     putname(x,y){ 
//         this.state.first_name=x;
//         this.state.second_name=y;
//    }

//    updatefirstname(x){
//     this.state.first_name=x;
//    }

//    updatelastname(y)
//    {
//     this.state.second_name=y;   
//    }
    putusername(x){
        this.state.username=x;
    }
    

    putphoto(x)
    {
     this.state.profile_photo=x;
     console.log(this.state.profile_photo)
    } 

    putpassword(x)
    {
        this.state.password=x;
    }
    deletepassword()
    {
        this.state.password="";
    }

    render()
    {
    return(
        <div>
        <Route exact path="/" render={({history})=>
        (<div>
        <Head val={"login"} />
        <Login pass={this.state.password} log={this.state.loggedin} onputusername={(name1)=>{this.putusername(name1)
        history.push("/Profile")
        }}/>
        <Head val={"footer"}/>
        </div>)
        }/>
        
        <Route exact path="/Profile" render={({history})=>
        (
        <div>
        <Head val={"header"} user={this.state.username} 
        photo={this.state.profile_photo}/>
        
        <Home/>
        <Logout/>
        <Head val={"footer"}/>
        </div>)}/>

        <Route exact path="/Upload" render={({history})=>
        (<div>
        <Head val={"login"} />
        <Upload log={this.state.loggedin}  onsetphoto={(photo)=>{this.putphoto(photo)
            history.push("/Profile")}} />
            
        <Head val={"footer"}/>
        </div>)
        }/>

        <Route exact path="/Update" render={({history})=>
        (<div>
        <Head val={"login"} />
        <Update log={this.state.loggedin} onupdatefirstname={(name1)=>{this.updatefirstname(name1)
            history.push("/Profile")}}
            onupdatelastname={(name1)=>{this.updatelastname(name1)
                history.push("/Profile")}}
            onupdatepass={(pass)=>{this.putpassword(pass)
                history.push("/")}}
            ondeletepassword={()=>{this.deletepassword()
                history.push("/")}} 
            onsetphoto={(photo)=>{this.putphoto(photo)
                    history.push("/Profile")}}
            />   
        <Head val={"footer"}/>
        </div>)}/>

        <Route exact path="/Product" render={()=>
            <div>
            <Product/>
            <Head val={"footer"}/>
            </div>
        }/> 
        <Route exact path="/Create" render={()=>
            <div>
            <Head val={"login"} />
            <AddProduct/>
            <Head val={"footer"}/>
            </div>
        }/>

        </div>
    )
    }
}
export default Main