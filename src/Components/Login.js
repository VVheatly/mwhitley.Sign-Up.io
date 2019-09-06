import React, {Component} from "react"
import {Link} from "react-router-dom"


export default class Login extends Component {
    state = {
        userName:"",
        password:""
    }

    change = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit = e => {
        e.preventDefault()
        console.log (this.state)    
    }

    render() {
        return(
        <div className="Canvas">
            <div className="box">

                <h1>Login</h1>
                <p className="Welc">Welcome back!</p>

                <form>

                <label>Username</label>
                <input
                name="userName"
                placeholder='Username' 
                value={this.state.userName} 
                onChange={e => this.change(e)}
                /> 

                <br />

                <label>Password</label>
                <input
                name="password"
                type="passowrd"
                placeholder='Password' 
                value={this.state.password} 
                onChange={e => this.change(e)}
                />
                    <button className="Submit" onClick={() => this.onSubmit()}>Submit</button>
                </form>
                <p className="Lg">Not a Member?<Link className="Lg1"to="/Form"> Create Account</Link></p>
            </div>
        </div>
        )
    }
}

//export default Login

