import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    const { signInUsingGoogle, signInUserWithEmailAndPassword, registerUserWithEmailAndPassword } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isRegistered, setIsRegistered] = useState(false);
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || "/";
    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_uri);
            });
    }
    const handleEmailChange = e => {
        setEmail(e.target.value);
    }
    const handlePasswordChange = e => {
        setPassword(e.target.value);
    }

    const handleRegistration = e => {
        if(!isRegistered){
            registerUserWithEmailAndPassword(email, password)
            .then((result) => {
                history.push(redirect_uri);
            })
            .catch((error) => {
                setError(error.message);
            });
        }else{
            signInUserWithEmailAndPassword(email, password)
            .then((result) => {
                history.push(redirect_uri);
            })
            .catch((error) => {
                setError(error.message);
            });
        }
        e.preventDefault();
    }
    const signIn = () =>{
        isRegistered ? setIsRegistered(false) : setIsRegistered(true);
    }
    return (
        <div>
            <div className="m-auto w-50 bg-info my-5 rounded">
                <div className="p-5 m-5">
                    <form onSubmit={handleRegistration}>
                        <h3>Please {isRegistered ? 'Login' : 'Register'}</h3>

                        <div className="form-group">
                            <label>Email address</label>
                            <input type="email" onBlur={handleEmailChange} className="form-control" placeholder="Enter email" required />
                        </div>

                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" onBlur={handlePasswordChange} className="form-control" placeholder="Enter password" required />
                        </div>

                        <div className="form-group">
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                            </div>
                        </div>
                        <div className="mb-3 text-danger">{error}</div>
                        <button type="submit" className="btn btn-primary btn-block">{isRegistered ? 'Login' : 'Register'}</button>
                        
                    </form>
                    <span>{isRegistered ? 'Not' : 'Already'} Registered?</span>
                    <button onClick={signIn} className="btn btn-warning m-2">{isRegistered ? 'Register' : 'Login'}</button> or
                    <button onClick={handleGoogleLogin} className="btn btn-warning m-2">Login with Google</button>
                </div>
            </div>
        </div>
    );
};

export default Login;