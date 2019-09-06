import React, {Component} from "react"
import { Link } from 'react-router-dom';

class Form extends Component {
    state = {
        firstName: "",
        lastName: "",
        userName: "",
        email: "",
        password: ""
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
        return (
            
            <div className="Canvas">
                <div className="box">
                    <h1>Sign-Up</h1>
                    <form>
                        <label>First Name</label>
                        <input
                        name="firstName"
                        placeholder='First Name' 
                        value={this.state.firstName} 
                        onChange={e => this.change(e)}
                        />

                        <br />

                        <label>Last Name</label>
                        <input
                        name= "lastName"
                        placeholder='Last Name' 
                        value={this.state.lastName} 
                        onChange={e => this.change(e)}
                        />

                        <br />

                        <label>Username</label>
                        <input
                        name="userName"
                        placeholder='Username' 
                        value={this.state.userName} 
                        onChange={e => this.change(e)}
                        />

                        <br />

                        <label>Email</label>
                        <input
                        name="email"
                        type="email"
                        placeholder='E-mail' 
                        value={this.state.email} 
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

                        <br />

                        <button className="Submit" onClick={() => this.onSubmit()}>Submit</button>
                    </form>

                    <p className="Lg">Already a Member?<Link className="Lg1"to="/"> Login</Link></p>
                </div>
            </div>
           
            
            

            
        )
    }
}

export default Form