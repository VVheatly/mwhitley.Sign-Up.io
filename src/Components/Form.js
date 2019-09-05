import React from "react"


class Form extends React.Component {
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

    handleClick= () => {
        import ('./Login')
        .then(({Login}) => {

        })
        .catch(err => {

        })
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
                        <p>Not a member?<a onClick={this.handleClick} href="./Login">Create account</a>></p>
                    </form>
                </div>
            </div>

            
        )
    }
}

export default Form