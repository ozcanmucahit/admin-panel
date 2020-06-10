import React, { Component } from 'react'
import axios from 'axios'


export default class login extends Component {

  constructor(props) {
		super(props)

		this.state = {
			nickName: 'mitarashj',
			password: '1995faruk*'
		}
	}

	changeHandler = e => {
		this.setState({ [e.target.name]: e.target.value })
	}

	submitHandler = e => {
		e.preventDefault()
		console.log(this.state)
		axios
			.post('http://api.easy-menu.net/login', this.state)
			.then(response => {
				console.log(response)
			})
			.catch(error => {
				console.log(error)
            })
          
      
	}



    render() {
        const { nickName, password } = this.state;

        return (
            <main className='main'>
                <div className="content">
                    <div class="container-fluid pb-5">
                        <div class="row justify-content-md-center">
                            <div class="card-wrapper col-12 col-md-4 mt-5">
                                <div class="brand text-center mb-3">
                                    <a href="/"><img src="public/img/logo.png" /></a>
                                </div>
                                <div class="card">
                                    <div class="card-body">
                                        <h4 class="card-title">Login</h4>
                                        <form onSubmit={this.submitHandler}>
                                        <div class="form-group">
                                        <label for="email">E-Mail id: </label>
                                        <input
                                        type="text"
                                        name="nickName"
                                        value={nickName}
                                        onChange={this.changeHandler}
                                        
                                        
                                        />
                                    </div>
                                            

                                            <div class="form-group">
                                                <label for="password">Password
										</label>
                                                <input  
                                                type="text"
                                                name="password"
                                                value={password}
                                                onChange={this.changeHandler} 
                                                
                                                />
                                                <div class="text-right">
                                                    <a href="password-reset.html" class="small">
                                                        Forgot Your Password?
											</a>
                                                </div>
                                            </div>

                                            <div class="form-group">
                                                <div class="form-check position-relative mb-2">
                                                    <input type="checkbox" class="form-check-input d-none" id="remember" name="remember" />
                                                    <label class="checkbox checkbox-xxs form-check-label ml-1" for="remember"
                                                        data-icon="&#xe936">Remember Me</label>
                                                </div>
                                            </div>

                                            <div class="form-group no-margin">
                                                <button  class="btn btn-primary" href="/App">Login</button>
                                            </div>
                                            <div class="text-center mt-3 small">
                                                Don't have an account? <a href="register.html">Sign Up</a>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <footer class="footer mt-3">
                                    <div class="container-fluid">
                                        <div class="footer-content text-center small">
                                            <span class="text-muted">&copy; 2019 Graindashboard. All Rights Reserved.</span>
                                        </div>
                                    </div>
                                </footer>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        )
    }
}
